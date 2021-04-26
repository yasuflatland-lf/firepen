import * as admin from 'firebase-admin';
import * as serviceAccount from '../../firestore-service-account.json';

// Setup firestore
const params = {
  type: serviceAccount.type,
  projectId: serviceAccount.project_id,
  privateKeyId: serviceAccount.private_key_id,
  privateKey: serviceAccount.private_key,
  clientEmail: serviceAccount.client_email,
  clientId: serviceAccount.client_id,
  authUri: serviceAccount.auth_uri,
  tokenUri: serviceAccount.token_uri,
  authProviderX509CertUrl: serviceAccount.auth_provider_x509_cert_url,
  clientC509CertUrl: serviceAccount.client_x509_cert_url,
};

admin.initializeApp({ credential: admin.credential.cert(params) });
const db = admin.firestore();

export default async (): Promise<void> => {
  // ↓↓↓↓↓↓ Write your code ↓↓↓↓↓↓
  const projectsQuerySnapshot = await db
    .collectionGroup('projects')
    .limit(10)
    .get();
  const projects = projectsQuerySnapshot.docs;
  console.log(projects.length);
  // ↑↑↑↑↑↑ Write your code ↑↑↑↑↑↑
};
