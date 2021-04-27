import * as admin from 'firebase-admin';
import * as serviceAccount from '../../firestore-service-account.json';

const vm = require('vm');

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

const context = {
  db: admin.firestore(),
  docs: Object,
};

export default async function run(): Promise<void> {
  const script = new vm.Script(
    'db.listCollections().then((value) => docs = value);'
  );
  vm.createContext(context);
  script.runInContext(context);
  // ↓↓↓↓↓↓ Write your code ↓↓↓↓↓↓
  // const docs = await admin.firestore().listCollections();
  // const projectsQuerySnapshot = await db
  //   .collectionGroup('projects')
  //   .limit(10)
  //   .get();
  // const projects = projectsQuerySnapshot.docs;
  console.log(context.docs);
  // ↑↑↑↑↑↑ Write your code ↑↑↑↑↑↑
}
