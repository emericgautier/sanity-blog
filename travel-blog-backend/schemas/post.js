const getPosition = (options) => {
    if (navigator.geolocation) {
        return new Pomise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject, options)
        })
    }
}

export default {
  name: "post",
  type: "document",
  title: "Blog Post",
  initialValue: async () => ({
    postedAt
  })
  fields: [
    {
      name: "postedAt",
      type: "geopoint",
      title: "Location",
    },
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      option: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "author",
      type: "reference",
      title: "Author",
      to: { type: "author" },
    },
    {
      name: "mainImage",
      type: "image",
      title: "Main Image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "categories",
      type: "array",
      title: "Categories",
      of: [{ type: "reference", to: { type: "category" } }],
    },
    {
      name: "publishedAt",
      type: "datetime",
      title: "Published At",
    },
    {
      name: "body",
      type: "blockContent",
      title: "Body",
    },
  ],
};
