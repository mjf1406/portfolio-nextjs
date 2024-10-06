import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { unstable_setRequestLocale } from "next-intl/server";
import { Navbar } from "src/components/nav";
import { routing } from "src/i18n/routing";

export default async function LocaleLayout({
    children,
    params: { locale },
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    unstable_setRequestLocale(locale);
    const messages = await getMessages({ locale });

    return (
        <NextIntlClientProvider messages={messages}>
            <Navbar params={{ locale }} />
            <div className="max-w-xl m-auto flex-auto justify-center items-center w-full">
                <div className="m-5">{children}</div>
            </div>
        </NextIntlClientProvider>
    );
}

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}
