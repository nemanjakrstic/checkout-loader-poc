/**
 * Get all Xola booking buttons from the page.
 */
export const queryButtons = () => {
    return [...document.querySelectorAll(".xola-checkout")] as HTMLDivElement[];
};
