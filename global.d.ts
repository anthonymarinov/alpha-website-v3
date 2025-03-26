export {};

declare global {
    interface Window {
        __SKIP_CAPTCHA__?: boolean;
    }
}