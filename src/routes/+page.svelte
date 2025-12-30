<div class="hero">
  <h1 class="hero-title">Robert Jackson</h1>
  <p class="hero-subtitle">Sr. DevOps Solutions Architect</p>
  <p class="hero-description">
    10+ years of experience designing cloud infrastructure, leading SRE teams, and building scalable DevOps solutions. Passionate about Kubernetes, Infrastructure as Code, and helping teams ship faster with confidence.
  </p>

  <div class="cta-buttons">
    <a href="/about" class="btn btn-primary">Learn More</a>
    <a href="/certs" class="btn btn-secondary">View Certifications</a>
  </div>
</div>

<div class="highlights grid-auto mt-2xl">
  <div class="highlight-card card text-center">
    <div class="highlight-icon">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/>
        <polyline points="2,17 12,22 22,17"/>
        <polyline points="2,12 12,17 22,12"/>
      </svg>
    </div>
    <h3>Cloud Architecture</h3>
    <p>AWS Solutions Architect Professional with expertise in designing scalable, cost-optimized infrastructure.</p>
  </div>

  <div class="highlight-card card text-center">
    <div class="highlight-icon">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="20,6 9,17 4,12"/>
      </svg>
    </div>
    <h3>DevOps & SRE</h3>
    <p>Building CI/CD pipelines, Kubernetes clusters, and Infrastructure as Code with Terraform and Helm.</p>
  </div>

  <div class="highlight-card card text-center">
    <div class="highlight-icon">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    </div>
    <h3>Team Leadership</h3>
    <p>Experienced engineering manager applying Servant Leadership to build high-performing SRE teams.</p>
  </div>
</div>

<style>
  .hero {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 4rem;
    padding: 2rem 0;
  }

  .hero-subtitle {
    font-size: 1.5rem;
    font-weight: 500;
    color: #475569;
    margin-bottom: 1.5rem;
  }

  .hero-description {
    font-size: 1.1rem;
    color: #64748b;
    line-height: 1.7;
    margin-bottom: 2.5rem;
  }

  .cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .highlights {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--spacing-xl);
    margin-top: var(--spacing-2xl);
  }

  .highlight-card {
    background: var(--color-bg-primary);
    padding: var(--spacing-xl);
    border-radius: var(--border-radius-lg);
    text-align: center;
    transition: all var(--transition-normal);
    border: 1px solid var(--color-border);
    box-shadow: 0 1px 3px var(--color-shadow);
  }

  .highlight-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px var(--color-shadow-hover);
    border-color: var(--color-primary);
  }

  .highlight-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    border-radius: var(--border-radius-full);
    background: var(--color-primary);
    color: white;
    margin-bottom: var(--spacing-lg);
  }

  .highlight-card h3 {
    font-size: 1.25rem;
    color: var(--color-text-primary);
    margin-bottom: var(--spacing-md);
  }

  .highlight-card p {
    color: var(--color-text-secondary);
    line-height: var(--line-height-normal);
    margin: 0;
  }

  @media (max-width: 768px) {
    .hero {
      padding: var(--spacing-md) 0;
    }

    .hero-subtitle {
      font-size: 1.25rem;
    }

    .cta-buttons {
      flex-direction: column;
      align-items: center;
    }

    .btn {
      width: 100%;
      max-width: 250px;
      justify-content: center;
    }

    .highlights {
      grid-template-columns: 1fr;
      gap: var(--spacing-lg);
    }

    .highlight-card {
      padding: var(--spacing-lg);
    }
  }

  /* Dark mode styles - now handled automatically by CSS variables */
</style>
