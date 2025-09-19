export default function Home() {
  return (
    <>
      <header className="text-black min-h-screen flex flex-col justify-between bg-gray-100">
        <div className="flex flex-col items-center justify-center px-4 space-y-6 flex-grow">
          <h1 className="text-3xl font-bold">Suwethan M</h1>
          <p className="text-lg text-gray-700">
            <b>Software Engineer |</b> <i>2+ years of experience</i>
          </p>

          <ul className="mt-4 text-center max-w-md list-disc list-inside space-y-2 text-gray-800">
            <li>
              Passionate about building scalable, high-performance applications and
              solving complex problems with innovative solutions.
            </li>
            <li>
              Skilled at designing robust architectures, optimizing systems for
              efficiency, and translating business needs into technical deliverables.
            </li>
            <li>
              Strong foundation in problem-solving, with a focus on clean,
              maintainable code and continuous improvement.
            </li>
            <li>
              Thrives in collaborative environments, embracing challenges as
              opportunities to grow and create impactful software that scales.
            </li>
          </ul>
        </div>

        <div className="px-6 py-3 bg-yellow-300 text-black-800 sm:bg-red-300 text-center text-lg shadow-sm">
          🚧 This website is under construction. <br />
          Please check back later for updates!
        </div>

      </header>
    </>
  );
}
