"use client";

const CLOUDINARY_UPLOAD_PATH = "/image/upload/";

export default function cloudinaryLoader({ src, width }) {
    if (!src.startsWith("https://res.cloudinary.com/")) return src;

    const imageUrl = new URL(src);
    const uploadIndex = imageUrl.pathname.indexOf(CLOUDINARY_UPLOAD_PATH);
    if (uploadIndex === -1) return src;

    const assetPath = imageUrl.pathname.slice(
        uploadIndex + CLOUDINARY_UPLOAD_PATH.length,
    );
    const assetSegments = assetPath.split("/");
    const versionIndex = assetSegments.findIndex((segment) => /^v\d+$/.test(segment));
    if (versionIndex === -1) return src;

    const versionedAssetPath = assetSegments.slice(versionIndex).join("/");
    imageUrl.pathname = `${imageUrl.pathname.slice(0, uploadIndex + CLOUDINARY_UPLOAD_PATH.length)}f_auto,c_limit,w_${width},q_auto/${versionedAssetPath}`;

    return imageUrl.toString();
}
