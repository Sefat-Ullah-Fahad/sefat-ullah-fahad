const siteUrl = "https://sefat-ullah-fahad.web.app";

export const dynamic = "force-static";

export default function robots() {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: `${siteUrl}/sitemap.xml`,
    };
}
