export const fetchPosts9Days = async () => {
    const today = new Date();
    let allPosts = [];
  
    for (let i = 0; i < 3; i++) {
      const fromDate = new Date();
      fromDate.setUTCDate(today.getUTCDate() - (3 * i + 2)); // Subtract in UTC
      const toDate = new Date();
      toDate.setUTCDate(today.getUTCDate() - 3 * i);
  
      const from = fromDate.toISOString().split("T")[0]; // Convert to UTC YYYY-MM-DD
      const to = toDate.toISOString().split("T")[0];     // Convert to UTC YYYY-MM-DD
  
      try {
        const response = await fetch(
          `https://apps.und.edu/demo/public/index.php/post?from=${from}&to=${to}`
        );
        const data = await response.json();
        allPosts = [...allPosts, ...data];
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }
    return allPosts;
  };
  