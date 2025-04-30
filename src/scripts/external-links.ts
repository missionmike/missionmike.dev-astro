// This script adds target="_blank" and rel="noopener noreferrer" to external links
export function processExternalLinks(content: string): string {
  // Regular expression to match anchor tags
  const linkRegex = /<a\s+(?:[^>]*?\s+)?href="([^"]*)"([^>]*)>/g;

  // Replace function to add target and rel attributes to external links
  return content.replace(linkRegex, (match, href, rest) => {
    // Check if the link is external (starts with http:// or https://)
    if (href.startsWith('http://') || href.startsWith('https://')) {
      // Check if target="_blank" is already present
      if (!rest.includes('target="_blank"')) {
        return `<a href="${href}"${rest} target="_blank" rel="noopener noreferrer">`;
      }
    }
    return match;
  });
}
