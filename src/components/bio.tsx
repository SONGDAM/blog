/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

function Bio() {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            github
            email
          }
        }
      }
    }
  `);

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author;
  const social = data.site.siteMetadata?.social;

  return (
    <>
      <div className='bio'>
        <StaticImage
          className='bio-avatar'
          layout='fixed'
          formats={['auto', 'webp', 'avif']}
          src='../images/profile-pic.png'
          width={50}
          height={50}
          quality={95}
          alt='Profile picture'
        />
        {author?.name && (
          <>
            <div>
              <p>
                Written by <strong>{author.name}</strong> {author?.summary || null}
              </p>
            </div>
          </>
        )}

        <div>
          <p>
            <a href={`https://github.com/${social?.github}` || ``}>Github</a>
          </p>
          <p>Email : {social?.email || ``}</p>
        </div>
      </div>
    </>
  );
}

export default Bio;
