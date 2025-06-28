import moment from 'moment-timezone';

export const fetchPosts9Days = async () => {
  const allPosts = [];
  const today = moment().tz('UTC'); // Get the current date in UTC

  for (let i = 0; i < 3; i++) {
    // Calculate 3-day date ranges in UTC
    const fromDate = today.clone().subtract(3 * i + 2, 'days').format('YYYY-MM-DD');
    const toDate = today.clone().subtract(3 * i, 'days').format('YYYY-MM-DD');

    try {
      const response = await fetch(
        `https://apps.und.edu/demo/public/index.php/post?from=${encodeURIComponent(fromDate)}&to=${encodeURIComponent(toDate)}`
      );
      // Throw an error if the API doesn't return a status of 200
      if (response.status !== 200) {
        throw new Error('Server responded unexpectedly');
      }
      const data = await response.json();
      allPosts.push(...data);
      allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }
  return allPosts;
};


// export const fetchPosts9Days = async ({ signal }) => {
//   const allPosts = [];

//   try {
//     const response = await fetch('http://localhost:3001/posts', { signal });
//     if (!response.ok) {
//       throw new Error(`Error fetching data: ${response.statusText}`);
//     }

//     const data = await response.json();
//     allPosts.push(...data);
//     // Sort posts based on the latest date and time
//     allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
//   } catch (error) {
//     if (error.name === 'AbortError') {
//       console.warn('Fetch aborted (component unmounted)');
//     } else {
//       console.error('Error fetching posts:', error);
//     }
//   }
//   return allPosts;
// };