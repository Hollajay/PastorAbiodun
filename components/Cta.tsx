

const Cta = () => {
  return (
    <section className="border-t border-neutral-200 py-20 text-center px-6 bg-white">
        <p className="text-[11px] tracking-[0.4em] text-neutral-500 mb-6">
          LISTEN & GROW
        </p>

        <h2 className="text-2xl md:text-3xl font-light mb-6 text text-yellow-500">
          Continue the Journey
        </h2>

        <p className="text-neutral-600 max-w-xl mx-auto mb-10">
          For deeper teachings, sermons, and spiritual insights, connect through these platforms.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">

          <a
            href="https://t.me/saabiodunmessages"
            target="_blank"
            className="border border-black text-black px-6 py-3 hover:bg-black hover:text-white transition"
          >
            Telegram Channel
          </a>

          <a
            href="https://open.spotify.com/show/6dgwo0y5IPEUIfn7Jk2j5A"
            target="_blank"
            className="border text-black border-black px-6 py-3 hover:bg-black hover:text-white transition"
          >
            Spotify
          </a>

        </div>
      </section>
  )
}

export default Cta