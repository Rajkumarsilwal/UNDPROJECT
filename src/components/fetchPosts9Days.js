
import moment from 'moment-timezone';

function validateNumber(num, name = 'number') {
  if (typeof num !== 'number' || isNaN(num) || num <= 0) {
    throw new Error(`Invalid ${name}: ${num}. Must be positive and non-zero.`);
  }
  if (!Number.isInteger(num))
    console.warn(`Warning: ${name} (${num}) rounded up.`);
  return Math.ceil(num);
}

function buildDateRangeUrl(baseUrl, fromDate, toDate) {
  return `${baseUrl}?from=${encodeURIComponent(fromDate)}&to=${encodeURIComponent(toDate)}`;
}

function validateFetchData(fetchAPIData) {
  if (!Array.isArray(fetchAPIData)) {
    console.warn('Warning: Expected an array of posts. Obtained data of type:', typeof fetchAPIData);
    return [];
  }

  const imageValidation = /^data:image\/svg\+xml/;

  const dataAfterValidation = fetchAPIData
    .filter(item => item && typeof item === 'object')
    .map(item => ({
      id: String(item.id || ''),
      date: moment.utc(item.date).toISOString(),
      message: item.message ? String(item.message) : '',
      author: item.author ? String(item.author) : '',
      image: (typeof item.image === 'string' && imageValidation.test(item.image)) ? item.image : '',
      username: item.username ? String(item.username) : '',
      location: item.location ? String(item.location) : '',
      likes: Math.max(0, Math.floor(Number(item.likes) || 0)),
      reposts: Math.max(0, Math.floor(Number(item.reposts) || 0)),
    }))
    .filter(item => item.id && !isNaN(new Date(item.date).getTime()))
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  return dataAfterValidation;
}


const BASE_URL = 'https://apps.und.edu/demo/public/index.php/post';
let MAX_API_PER_RANGE = 3;  // max days per API call
let TOTAL_API_RANGE = 9;    // total days to fetch
const TIME_ZONE = 'UTC';


export const fetchPosts9Days = async ({ signal }) => {
  const allPosts = [];
  const todayDate = moment().tz(TIME_ZONE).startOf('day');

  MAX_API_PER_RANGE = validateNumber(MAX_API_PER_RANGE, 'MAX_API_PER_RANGE');
  TOTAL_API_RANGE = validateNumber(TOTAL_API_RANGE, 'TOTAL_API_RANGE');
  const totalAPI = validateNumber(TOTAL_API_RANGE / MAX_API_PER_RANGE, 'totalAPI');

  for (let i = 0; i < totalAPI; i++) {
    const fromDate = todayDate.clone().subtract(MAX_API_PER_RANGE * (i + 1) - 1, 'days').format('YYYY-MM-DD');
    const toDate = todayDate.clone().subtract(MAX_API_PER_RANGE * i, 'days').format('YYYY-MM-DD');

    const url = buildDateRangeUrl(BASE_URL, fromDate, toDate);

    try {
      const response = await fetch(url, {
        signal,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`);
      }

      const data = await response.json();
      allPosts.push(...data);
    } catch (error) {
      if (error.name === 'AbortError') {
        console.warn('Fetch aborted');
        break;
      } else {
        console.error('Error fetching posts:', error);
      }
    }
  }
  const dataAfterValidation = validateFetchData(allPosts);
  return dataAfterValidation;
};
