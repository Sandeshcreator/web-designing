function fetchPostData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Post Data fetched");
    }, 2000);
  });
}

function fetchCommentData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Comment Data fetched");
    }, 2000);
  });
}

async function getBlogData() {
  try {
    console.log("Loading ...");
    // const post = await fetchPostData();
    // console.log(`post is here ${post}`);
    // const comment = await fetchCommentData();
    // console.log(`post is here ${comment}`);

    const [post, comment] = await Promise.all([
      fetchPostData(),
      fetchCommentData(),
    ]);

    console.log(post);
    console.log(comment);
    console.log(`Fetch Complete`);
  } catch (error) {
    console.log(`Something went wrong ${error}`);
  }
}

getBlogData();
