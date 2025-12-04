

export default function Custom500() {
  return (
    <section className="px-6 lg:px-22 md:px-10 py-40">
      <div className="flex flex-col justify-center items-center text-center">
        <h2 className="text-[28px] md:text-[46px] Primary-font uppercase leading-tight bg-gradient-to-r from-[#CFA77F] via-[#ffff] to-[#ffff] bg-clip-text text-transparent">
          Oops! Something went wrong.
        </h2>
        <p className="py-4 text-[#e7e4e0]">
          We're experiencing some technical difficulties. Please try again later. If the problem persists, contact our support team.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="cursor-pointer uppercase px-5 py-3 bg-[#CFA77F] text-white rounded-xl hover:bg-[#cead8c] transition"
        >
          Refresh Page
        </button>
      </div>
    </section>
  )
}