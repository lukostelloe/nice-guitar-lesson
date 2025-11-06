import { useTranslations } from "next-intl";

function AboutMe() {
  const t = useTranslations("about_me");
  return (
    <>
      <h1 className="text-2xl font-semibold text-zinc-900">{t("title")}</h1>
      <h1 className="text-l font-semibold text-zinc-900">{t("subtitle")}</h1>
      <p className="mt-4 text-zinc-600 leading-relaxed">{t("hi_im_luke")}</p>
      <p className="mt-4 text-zinc-600 leading-relaxed">{t("info")}</p>
    </>
  );
}

export default AboutMe;
