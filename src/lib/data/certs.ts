export interface CertMeta {
  id: string;
  title: string;
  issued?: string;
  issuer?: string;
  pdfUrl?: string;
}

export const certs: CertMeta[] = [
  {
    id: 'cka',
    title: 'Certified Kubernetes Administrator (CKA)',
    issuer: 'Cloud Native Computing Foundation',
    issued: '2020',
    pdfUrl: '/certs/CKA_Certificate.pdf'
  },
  {
    id: 'aws-sa-pro',
    title: 'AWS Solutions Architect - Professional',
    issuer: 'Amazon Web Services',
    issued: '2019',
    pdfUrl: '/certs/awsSolutionsArchitect_PE.pdf'
  },
  {
    id: 'aws-devops',
    title: 'AWS DevOps Engineer - Professional',
    issuer: 'Amazon Web Services',
    issued: '2018',
    pdfUrl: '/certs/awsDevOpsEngineer_PE.pdf'
  },
  {
    id: 'aws-dev',
    title: 'AWS Certified Developer - Associate',
    issuer: 'Amazon Web Services',
    issued: '2017',
    pdfUrl: '/certs/awsCertifiedDeveloper_AE.pdf'
  },
  {
    id: 'aws-sa-assoc',
    title: 'AWS Solutions Architect - Associate',
    issuer: 'Amazon Web Services',
    issued: '2017',
    pdfUrl: '/certs/awsSolutionsArchitect_AE.pdf'
  },
  {
    id: 'aws-sysops',
    title: 'AWS SysOps Administrator - Associate',
    issuer: 'Amazon Web Services',
    issued: '2017',
    pdfUrl: '/certs/awsSysOpsAdmin_AE.pdf'
  },
  {
    id: 'security-plus',
    title: 'CompTIA Security+',
    issuer: 'CompTIA',
    issued: '2017',
    pdfUrl: '/certs/CompTIA_Security%2B.pdf'
  }
];
