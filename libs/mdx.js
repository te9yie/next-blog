import Link from "next/link";
import remarkWikiLink from "remark-wiki-link";
import remarkGfm from "remark-gfm";

export const components = {
  a: (props) => <Link {...props} />,
};

export const remarkPlugins = [
  [remarkGfm],
  [
    remarkWikiLink,
    {
      pageResolver: (name) => [name],
      hrefTemplate: (link) => link,
    },
  ],
];
