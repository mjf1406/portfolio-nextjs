import { Metadata } from 'next';

type GenerateMetadataFn = (params: { params: { locale: string } }) => Metadata;

export function createGenerateMetadata(
    title: string,
    description: string
): GenerateMetadataFn {
    return function generateMetadata({ params: { locale } }: { params: { locale: string } }): Metadata {
        return {
            title,
            description,
            alternates: {
                canonical: `/${locale}`,
                languages: {
                    'en': '/en',
                    'ko': '/ko',
                    'zh': '/zh',
                },
            },
        };
    };
}