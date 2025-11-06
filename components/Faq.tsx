import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";

function Faq() {
  const t = useTranslations("faq");
  return (
    <>
      <h1 className="text-2xl font-semibold text-zinc-900">FAQ</h1>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>{t("q1")}</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>{t("a1")}</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>{t("q2")}</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>{t("a2")}</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>{t("q3")}</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>{t("a3")}</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>{t("q4")}</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>{t("a4")}</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default Faq;
