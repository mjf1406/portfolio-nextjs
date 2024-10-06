import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { routing } from "src/i18n/routing";
import { Props } from "utils/types";

export default function Page({ params: { locale } }: Props) {
    unstable_setRequestLocale(locale);

    const t = useTranslations("home");

    return (
        <section className="space-y-5">
            <div className="flex flex-col gap-5 justify-center items-center text-center">
                <div className="text-sm uppercase">{t("quote")}</div>
                <h1 className="text-5xl font-bold">Michael J. Fitzgerald</h1>
                <div className="text-xl">{t("blurb")}</div>
                <div className="text-lg">
                    <p>{t("intro")}</p>
                </div>
            </div>
        </section>
    );
}

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}
