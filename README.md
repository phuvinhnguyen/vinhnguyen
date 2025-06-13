# The Journey

A personal research blog built with Jekyll.

## Local Development

1. Install Ruby and Bundler:
   ```bash
   # On Ubuntu/Debian
   sudo apt-get install ruby-full build-essential
   gem install bundler
   ```

2. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

3. Install dependencies:
   ```bash
   bundle install
   ```

4. Start the local server:
   ```bash
   bundle exec jekyll serve
   ```

5. Visit `http://localhost:4000` in your browser.

## Features

- Responsive design
- Markdown support
- Code syntax highlighting
- Mermaid diagrams
- Math equations with MathJax
- Copy code button
- SEO optimization
- Sitemap generation

## Deployment

This site is automatically deployed to GitHub Pages using GitHub Actions. The workflow is configured in `.github/workflows/jekyll-gh-pages.yml`.

To deploy manually:

1. Push your changes to the `main` branch:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. GitHub Actions will automatically build and deploy your site.

## Configuration

- Edit `_config.yml` to change site settings
- Add new posts in the `_posts` directory
- Customize styles in `assets/css/main.css`
- Modify layouts in `_layouts` directory

## License

This project is licensed under the MIT License - see the LICENSE file for details. 