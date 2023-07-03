import { Badge } from "@/components/ui/badge"

export default function Skills() {
  const skills = [
    "TypeScript",
    "JavaScript",
    "Tailwind",
    "Bootstrap",
    "HTML5",
    "CSS3",
    "SCSS",
    "Jquery",
    "React",
    "Nextjs",
    "Nodejs",
    "Express",
    "PHP",
    "Python",
    "Java",
    "C#",
    "MySQL",
    "PostgreSQL",
    "SQLite",
    "Git",
  ]

  return (
    <section className="p-8 lg:p-32 bg-zinc-50 dark:bg-zinc-950 rounded-lg">
      <div className="flex flex-col lg:flex-row gap-16">
        <img
          src="/pc-logo.svg"
          alt="PC Logo"
          className="hidden lg:block"
          width={400}
          height={400}
        />
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">What I do</h1>
          <p className="lg:text-lg text-zinc-500 dark:text-zinc-400 mb-6">
            I build full-stack web applications with responsive user interfaces
            using modern technologies to streamline the development as well as
            deliver robust applications that enhance user experience. I'm also
            proficient at integrating third-party services to improve the
            versatility of the applications I create, along with having
            expertise in building REST APIs. With a passion for delivering
            innovative and user-centric solutions, I'm committed to providing
            seamless experiences across all devices and platforms.
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Technologies I work with
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge
                className="lg:text-sm bg-zinc-500 dark:bg-zinc-300"
                key={skill}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
