import React from 'react'
import "./pages.css"

const AboutPage = () => (
  <div className="about__container">
    <h2 className="about__title">About</h2>
    <p>
      Yo! Welcome to <span className="sine-nomine">Sine Nomine.</span>
    </p>
    <p>
      <span className="sine-nomine">Sine Nomine</span> is a blog site for code
      newbies in web development.{' '}
    </p>
    <p>
      I will share with you some of the things I learn as I continue on my web
      development journey. I hope you find all or some of it useful.
    </p>
    <p>
      I believe in sharing your knowledge hence why I have created{' '}
      <span className="sine-nomine">Sine Nomine</span>, that said, I am very
      open to learning from you as well. Share your blog posts with me if you
      have one, send me a link to your projects or even if you just stumble
      across a new JS library, you think I should check out, holla at me!. We
      both know there is a new JS library/framework every day!
    </p>
    <p>
      Truth be told though, I don't have a list of blog topics chilling in my
      notebook (yes I do have a notebook, I take it everywhere!), my plan is to
      just write about anything new I learn about. I tend to forget a lot of
      things I learn about so maybe writing will help me remember more or at
      least I can always refer back to it if I do forget.
    </p>
    <p>
      If you spot a mistake in any of the blogs posted or have any feedback,
      please do reach out to me. I am not claiming to be an expert on these
      things!
    </p>
    <p>
      PS: I strongly recommend you get a notebook if you don't have one already.
    </p>
    <p className="about__text">
      Email: <a href="mailto:sine.nomine.blog@gmail.com">
        sine.nomine.blog@gmail.com
      </a>
    </p>
  </div>
)

export default AboutPage