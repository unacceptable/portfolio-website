<div class="about-container content-container">
  <div class="about-header text-center mb-2xl">
    <h1>About Me</h1>
    <p class="lead">Sr. DevOps Solutions Architect with 10+ years of experience building cloud infrastructure, leading SRE teams, and shipping reliable software at scale.</p>
  </div>

  <div class="about-content">
    <div class="about-section card">
      <h2>Professional Background</h2>
      <p>
        I'm a DevOps engineer and engineering leader who thrives on building infrastructure that teams can depend on.
        From designing Kubernetes clusters and CI/CD pipelines from scratch to leading SRE teams through acquisitions,
        I bring a hands-on approach combined with strategic thinking.
      </p>
      <p>
        I've reduced cloud spending by tens of thousands per month, containerized legacy systems, and helped organizations
        adopt Infrastructure as Code with Terraform, Helm, and modern GitOps practices. I believe in Servant Leadership
        and building teams that ship with confidence.
      </p>
    </div>

    <div class="about-section">
      <h2>Experience Highlights</h2>
      <div class="experience-list">
        <div class="experience-item">
          <h3>BackBox</h3>
          <p class="role">Sr. DevOps Solutions Architect • 2023 - Present</p>
          <p>Designed IaC strategy, stood up first Kubernetes clusters, built modular CI/CD pipelines, and created platform automation for ephemeral customer sandboxes.</p>
        </div>
        <div class="experience-item">
          <h3>PDI Technologies / Koupon</h3>
          <p class="role">Site Reliability Engineering Manager • 2021 - 2023</p>
          <p>Led SRE team through acquisition, reduced cloud spending ~$36.7k/month, oversaw infrastructure accounting for 25% of revenue with only 5% of cloud spend.</p>
        </div>
        <div class="experience-item">
          <h3>Dell</h3>
          <p class="role">DevOps Solutions Architect • 2018 - 2021</p>
          <p>Team Lead for Insights Platform SRE. Developed cloud-agnostic solutions, integrated SecOps patterns, and guided teams to adopt DevOps practices.</p>
        </div>
        <div class="experience-item">
          <h3>Alkami</h3>
          <p class="role">Site Reliability Engineer • 2017 - 2018</p>
          <p>Facilitated cloud migrations, developed custom CLI tools in Python, authored Ansible automation for Windows Server deployments.</p>
        </div>
        <div class="experience-item">
          <h3>ARMOR (Firehost)</h3>
          <p class="role">Site Reliability Engineer • 2015 - 2017</p>
          <p>Built automation with Ansible and Terraform, developed AWS Lambda functions, recommended cost-reduction strategies saving $15.7k+/month.</p>
        </div>
      </div>
    </div>

    <div class="about-section">
      <h2>Technical Skills</h2>
      <div class="skills-grid">
        <div class="skill-category">
          <h3>Infrastructure & Cloud</h3>
          <ul>
            <li>Kubernetes & Helm</li>
            <li>Terraform & OpenTofu</li>
            <li>AWS (5x Certified)</li>
            <li>Docker & Containerization</li>
          </ul>
        </div>

        <div class="skill-category">
          <h3>DevOps & CI/CD</h3>
          <ul>
            <li>GitHub Actions & GitLab CI</li>
            <li>Jenkins & Bamboo</li>
            <li>Ansible & Packer</li>
            <li>Security Scanning (Trivy)</li>
          </ul>
        </div>

        <div class="skill-category">
          <h3>Languages & Tools</h3>
          <ul>
            <li>Python</li>
            <li>Bash & Shell</li>
            <li>PowerShell</li>
            <li>API & Webhook Automation</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="about-section">
      <h2>Certifications</h2>
      <p>
        I hold 7 industry certifications including CKA, all 5 AWS associate and professional certifications, and CompTIA Security+.
      </p>
      <div class="cta-section">
        <a href="/certs" class="btn btn-primary">View All Certifications</a>
      </div>
    </div>
  </div>
</div>

<style>
  .about-container {
    max-width: 900px;
    margin: 0 auto;
  }

  .about-header {
    text-align: center;
    margin-bottom: var(--spacing-2xl);
  }

  .lead {
    font-size: 1.25rem;
    color: var(--color-text-secondary);
    line-height: 1.7;
    max-width: 700px;
    margin: 0 auto;
  }

  .about-content {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-2xl);
  }

  .about-section {
    background: var(--color-bg-primary);
    padding: 2.5rem;
    border-radius: var(--border-radius-lg);
    border: 1px solid var(--color-border);
    box-shadow: 0 1px 3px var(--color-shadow);
  }

  .about-section h2 {
    color: var(--color-text-primary);
    margin-bottom: var(--spacing-lg);
    font-size: 1.75rem;
  }

  .about-section p {
    color: var(--color-text-secondary);
    line-height: 1.7;
    margin-bottom: var(--spacing-lg);
  }

  .experience-list {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-lg);
  }

  .experience-item {
    padding: var(--spacing-lg);
    background: var(--color-bg-muted);
    border-radius: var(--radius-md);
    border-left: 3px solid var(--color-primary);
  }

  .experience-item h3 {
    color: var(--color-text-primary);
    margin: 0 0 var(--spacing-xs) 0;
    font-size: var(--font-size-lg);
  }

  .experience-item .role {
    color: var(--color-primary);
    font-size: var(--font-size-sm);
    font-weight: 500;
    margin-bottom: var(--spacing-sm);
  }

  .experience-item p:last-child {
    margin-bottom: 0;
    font-size: var(--font-size-sm);
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--spacing-xl);
    margin-top: var(--spacing-xl);
  }

  .skill-category {
    background: var(--color-bg-muted);
    padding: var(--spacing-lg);
    border-radius: var(--border-radius-lg);
    border: 1px solid var(--color-border);
  }

  .skill-category h3 {
    color: var(--color-text-primary);
    margin-bottom: var(--spacing-md);
    font-size: var(--font-size-lg);
  }

  .skill-category ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .skill-category li {
    color: var(--color-text-secondary);
    padding: var(--spacing-sm) 0;
    border-bottom: 1px solid rgba(226, 232, 240, 0.5);
    position: relative;
    padding-left: var(--spacing-lg);
  }

  .skill-category li:last-child {
    border-bottom: none;
  }

  .skill-category li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #059669;
    font-weight: bold;
  }

  .cta-section {
    text-align: center;
    margin-top: var(--spacing-xl);
  }

  @media (max-width: 768px) {
    .about-section {
      padding: var(--spacing-lg);
    }

    .skills-grid {
      grid-template-columns: 1fr;
      gap: var(--spacing-lg);
    }

    .skill-category {
      padding: 1.25rem;
    }

    .lead {
      font-size: 1.1rem;
    }

    .about-section h2 {
      font-size: var(--font-size-xl);
    }
  }

  /* Dark mode adjustments for skill check marks */
  :global(.dark .skill-category li::before) {
    color: #10b981;
  }
</style>
