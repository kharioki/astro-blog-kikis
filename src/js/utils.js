export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}


export function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    timeZone: 'UTC',
  });
}

export function formatBlogPosts(posts, {
  filterOutDrafts = true,
  filterOutFuturePosts = true,
  sortByDate = true,
  limit = undefined,
} = {}) {

  const filteredPosts = posts.reduce((acc, post) => {
    const { date, draft } = post.frontmatter;

    // filter out drafts
    if (filterOutDrafts && draft) return acc;

    // filter out future posts
    if (filterOutFuturePosts && new Date(date) > new Date()) return acc;

    // add post to accumulator
    acc.push(post);

    return acc;
  }, []);

  // sort posts by date
  if (sortByDate) {
    filteredPosts.sort((a, b) => {
      const dateA = new Date(a.frontmatter.date);
      const dateB = new Date(b.frontmatter.date);

      return dateB - dateA;
    });
  } else {
    filteredPosts.sort(() => Math.random() - 0.5);
  }

  // limit posts if number is provided
  if (typeof limit === "number") {
    return filteredPosts.slice(0, limit);
  }

  return filteredPosts;
}
