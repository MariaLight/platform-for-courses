export const transformCourse = (dbCourse) => ({

    id: dbCourse.id,
    title: dbCourse.title,
    image_url: dbCourse.imageUrl,
    published_at: dbCourse.publishedAt,

})