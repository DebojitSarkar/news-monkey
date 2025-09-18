function NewsCard({ eachNews }) {
  const { title, description, urlToImage } = eachNews;

  return (
    <div className="flex flex-col rounded-xl border p-2 shadow hover:shadow-lg">
      {/* IMAGE */}
      {urlToImage && (
        <img
          src={urlToImage}
          alt={title}
          className="h-48 w-full rounded-t-xl object-cover"
        />
      )}

      {/* REST */}
      <div className="my-2 gap-2 px-2 py-2">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="text-xl text-zinc-500">{description}</p>
      </div>
    </div>
  );
}

export default NewsCard;
