function Card({
    username = "Mk",
    post = "Not assigned yet",
    img = "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=800",
  }) {
    return (
      <div>
        <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
          <img
            className="w-24 h-24 rounded-full mx-auto"
            src={img}
            alt=""
            width="384"
            height="512"
          />
          <div className="pt-6 space-y-4">
            <blockquote>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div>{username}</div>
              <div>{post}</div>
            </figcaption>
          </div>
        </figure>
      </div>
    );
  }
  
  export default Card;
  