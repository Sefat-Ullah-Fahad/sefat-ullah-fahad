const siteUrl = "https://sefat-ullah-fahad.web.app";

export const dynamic = "force-static";

export default function sitemap() {
    return [
        {
            url: siteUrl,
            changeFrequency: "monthly",
            priority: 1,
        },
    ];
}
