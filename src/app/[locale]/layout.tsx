import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { unstable_setRequestLocale } from "next-intl/server";
import { Navbar } from "src/components/nav";

export default async function LocaleLayout({
    children,
    params: { locale },
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    const messages = await getMessages();

    unstable_setRequestLocale(locale);

    return (
        <NextIntlClientProvider messages={messages}>
            <Navbar />
            <div className="max-w-xl m-auto flex-auto justify-center items-center w-full">
                <div className="m-5">{children}</div>
            </div>
        </NextIntlClientProvider>
    );
}
