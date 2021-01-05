import { CMS_NAME, CMS_URL } from "../lib/constants";

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8">
        Разбогатей, или умри Пытаясь
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Блог о сущности денег, богатства и успеха. Почему? Откуда? Как?
      </h4>
    </section>
  );
}
