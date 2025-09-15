import Link from "next/link";
import { experiences } from "../utils/experiences";

export function Experiences() {
  return (
    <div className="mt-6 flex flex-col gap-4">
      <h1 className="text-2xl font-semibold text-white text-center xl:text-start">
        Experiências
      </h1>

      <ul className="flex flex-col xl:list-disc gap-2 text-sm text-white text-center xl:text-start">
        {experiences.map((experience) => {
          return (
            <li key={experience.id}>
              {experience.role} na{" "}
              <Link
                href={experience.href}
                target="_blank"
                className="hover:underline hover:text-green-600 font-bold"
              >
                {experience.company}
              </Link>{" "}
              ({experience.period})
            </li>
          );
        })}
      </ul>
    </div>
  );
}
