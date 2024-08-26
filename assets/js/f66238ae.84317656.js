"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[5772],{9481:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>o});var s=r(4848),i=r(8453);const t={title:"Vector Stores",sidebar_position:7,slug:"/components-vector-stores"},l=void 0,c={id:"Components/components-vector-stores",title:"Vector Stores",description:"This page may contain outdated information. It will be updated as soon as possible.",source:"@site/docs/Components/components-vector-stores.md",sourceDirName:"Components",slug:"/components-vector-stores",permalink:"/components-vector-stores",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Vector Stores",sidebar_position:7,slug:"/components-vector-stores"},sidebar:"defaultSidebar",previous:{title:"Embedding Models",permalink:"/components-embedding-models"},next:{title:"Custom Components",permalink:"/components-custom-components"}},d={},o=[{value:"Astra DB",id:"453bcf5664154e37a920f1b602bd39da",level:3},{value:"Astra DB Search",id:"26f25d1933a9459bad2d6725f87beb11",level:3},{value:"Chroma",id:"74730795605143cba53e1f4c4f2ef5d6",level:3},{value:"Chroma Search",id:"5718072a155441f3a443b944ad4d638f",level:3},{value:"Couchbase",id:"6900a79347164f35af27ae27f0d64a6d",level:3},{value:"Couchbase Search",id:"c77bb09425a3426f9677d38d8237d9ba",level:3},{value:"FAISS",id:"5b3f4e6592a847b69e07df2f674a03f0",level:3},{value:"FAISS Search",id:"81ff12d7205940a3b14e3ddf304630f8",level:3},{value:"MongoDB Atlas",id:"eba8892f7a204b97ad1c353e82948149",level:3},{value:"MongoDB Atlas Search",id:"686ba0e30a54438cbc7153b81ee4b1df",level:3},{value:"PGVector",id:"7ceebdd84ab14f8e8589c13c58370e5b",level:3},{value:"PGVector Search",id:"196bf22ea2844bdbba971b5082750943",level:3},{value:"Pinecone",id:"67abbe3e27c34fb4bcb35926ce831727",level:3},{value:"Pinecone Search",id:"977944558cad4cf2ba332ea4f06bf485",level:3},{value:"Qdrant",id:"88df77f3044e4ac6980950835a919fb0",level:3},{value:"Qdrant Search",id:"5ba5f8dca0f249d7ad00778f49901e6c",level:3},{value:"Redis",id:"a0fb8a9d244a40eb8439d0f8c22a2562",level:3},{value:"Redis Search",id:"80aea4da515f490e979c8576099ee880",level:3},{value:"Supabase",id:"e86fb3cc507e4b5494f0a421f94e853b",level:3},{value:"Supabase Search",id:"fd02d550b9b2457f91f2f4073656cb09",level:3},{value:"Upstash Vector",id:"upstash-vector",level:3},{value:"Vectara",id:"b4e05230b62a47c792a89c5511af97ac",level:3},{value:"Vectara Search",id:"31a47221c23f4fbba4a7465cf1d89eb0",level:3},{value:"Weaviate",id:"57c7969574b1418dbb079ac5fc8cd857",level:3},{value:"Weaviate Search",id:"6d4e616dfd6143b28dc055bc1c40ecae",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"This page may contain outdated information. It will be updated as soon as possible."})}),"\n",(0,s.jsx)(n.h3,{id:"453bcf5664154e37a920f1b602bd39da",children:"Astra DB"}),"\n",(0,s.jsxs)(n.p,{children:["The\xa0",(0,s.jsx)(n.code,{children:"Astra DB"}),"\xa0initializes a vector store using Astra DB from Data. It creates Astra DB-based vector indexes to efficiently store and retrieve documents."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Input:"}),"\xa0Documents or Data for input."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Embedding or Astra vectorize:"}),"\xa0External or server-side model Astra DB uses."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Collection Name:"}),"\xa0Name of the Astra DB collection."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Token:"}),"\xa0Authentication token for Astra DB."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"API Endpoint:"}),"\xa0API endpoint for Astra DB."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Namespace:"}),"\xa0Astra DB namespace."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Metric:"}),"\xa0Metric used by Astra DB."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Batch Size:"}),"\xa0Batch size for operations."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Bulk Insert Batch Concurrency:"}),"\xa0Concurrency level for bulk inserts."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Bulk Insert Overwrite Concurrency:"}),"\xa0Concurrency level for overwriting during bulk inserts."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Bulk Delete Concurrency:"}),"\xa0Concurrency level for bulk deletions."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Setup Mode:"}),"\xa0Setup mode for the vector store."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Pre Delete Collection:"}),"\xa0Option to delete the collection before setup."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Metadata Indexing Include:"}),"\xa0Fields to include in metadata indexing."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Metadata Indexing Exclude:"}),"\xa0Fields to exclude from metadata indexing."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Collection Indexing Policy:"}),"\xa0Indexing policy for the collection."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"NOTE"}),"\n",(0,s.jsx)(n.p,{children:"Ensure you configure the necessary Astra DB token and API endpoint before starting."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"26f25d1933a9459bad2d6725f87beb11",children:"Astra DB Search"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Astra DBSearch"}),"\xa0searches an existing Astra DB vector store for documents similar to the input. It uses the\xa0",(0,s.jsx)(n.code,{children:"Astra DB"}),"component's functionality for efficient retrieval."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Search Type:"}),"\xa0Type of search, such as Similarity or MMR."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Input Value:"}),"\xa0Value to search for."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Embedding or Astra vectorize:"}),"\xa0External or server-side model Astra DB uses."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Collection Name:"}),"\xa0Name of the Astra DB collection."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Token:"}),"\xa0Authentication token for Astra DB."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"API Endpoint:"}),"\xa0API endpoint for Astra DB."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Namespace:"}),"\xa0Astra DB namespace."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Metric:"}),"\xa0Metric used by Astra DB."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Batch Size:"}),"\xa0Batch size for operations."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Bulk Insert Batch Concurrency:"}),"\xa0Concurrency level for bulk inserts."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Bulk Insert Overwrite Concurrency:"}),"\xa0Concurrency level for overwriting during bulk inserts."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Bulk Delete Concurrency:"}),"\xa0Concurrency level for bulk deletions."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Setup Mode:"}),"\xa0Setup mode for the vector store."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Pre Delete Collection:"}),"\xa0Option to delete the collection before setup."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Metadata Indexing Include:"}),"\xa0Fields to include in metadata indexing."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Metadata Indexing Exclude:"}),"\xa0Fields to exclude from metadata indexing."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Collection Indexing Policy:"}),"\xa0Indexing policy for the collection."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"74730795605143cba53e1f4c4f2ef5d6",children:"Chroma"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Chroma"}),"\xa0sets up a vector store using Chroma for efficient vector storage and retrieval within language processing workflows."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Collection Name:"}),"\xa0Name of the collection."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Persist Directory:"}),"\xa0Directory to persist the Vector Store."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Server CORS Allow Origins (Optional):"}),"\xa0CORS allow origins for the Chroma server."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Server Host (Optional):"}),"\xa0Host for the Chroma server."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Server Port (Optional):"}),"\xa0Port for the Chroma server."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Server gRPC Port (Optional):"}),"\xa0gRPC port for the Chroma server."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Server SSL Enabled (Optional):"}),"\xa0SSL configuration for the Chroma server."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Input:"}),"\xa0Input data for creating the Vector Store."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Embedding:"}),"\xa0Embeddings used for the Vector Store."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["For detailed documentation and integration guides, please refer to the\xa0",(0,s.jsx)(n.a,{href:"https://python.langchain.com/docs/integrations/vectorstores/chroma",children:"Chroma Component Documentation"}),"."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"5718072a155441f3a443b944ad4d638f",children:"Chroma Search"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ChromaSearch"}),"\xa0searches a Chroma collection for documents similar to the input text. It leverages Chroma to ensure efficient document retrieval."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Input:"}),"\xa0Input text for search."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Search Type:"}),"\xa0Type of search, such as Similarity or MMR."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Collection Name:"}),"\xa0Name of the Chroma collection."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Index Directory:"}),"\xa0Directory where the Chroma index is stored."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Embedding:"}),"\xa0Embedding model used for vectorization."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Server CORS Allow Origins (Optional):"}),"\xa0CORS allow origins for the Chroma server."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Server Host (Optional):"}),"\xa0Host for the Chroma server."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Server Port (Optional):"}),"\xa0Port for the Chroma server."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Server gRPC Port (Optional):"}),"\xa0gRPC port for the Chroma server."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Server SSL Enabled (Optional):"}),"\xa0SSL configuration for the Chroma server."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"6900a79347164f35af27ae27f0d64a6d",children:"Couchbase"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Couchbase"}),"\xa0builds a Couchbase vector store from Data, streamlining the storage and retrieval of documents."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Embedding:"}),"\xa0Model used by Couchbase."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Input:"}),"\xa0Documents or Data."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Couchbase Cluster Connection String:"}),"\xa0Cluster Connection string."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Couchbase Cluster Username:"}),"\xa0Cluster Username."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Couchbase Cluster Password:"}),"\xa0Cluster Password."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Bucket Name:"}),"\xa0Bucket identifier in Couchbase."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Scope Name:"}),"\xa0Scope identifier in Couchbase."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Collection Name:"}),"\xa0Collection identifier in Couchbase."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Index Name:"}),"\xa0Index identifier."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["For detailed documentation and integration guides, please refer to the\xa0",(0,s.jsx)(n.a,{href:"https://python.langchain.com/docs/integrations/vectorstores/couchbase",children:"Couchbase Component Documentation"}),"."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"c77bb09425a3426f9677d38d8237d9ba",children:"Couchbase Search"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"CouchbaseSearch"}),"\xa0leverages the Couchbase component to search for documents based on similarity metric."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Input:"}),"\xa0Search query."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Embedding:"}),"\xa0Model used in the Vector Store."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Couchbase Cluster Connection String:"}),"\xa0Cluster Connection string."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Couchbase Cluster Username:"}),"\xa0Cluster Username."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Couchbase Cluster Password:"}),"\xa0Cluster Password."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Bucket Name:"}),"\xa0Bucket identifier."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Scope Name:"}),"\xa0Scope identifier."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Collection Name:"}),"\xa0Collection identifier in Couchbase."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Index Name:"}),"\xa0Index identifier."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"5b3f4e6592a847b69e07df2f674a03f0",children:"FAISS"}),"\n",(0,s.jsxs)(n.p,{children:["The\xa0",(0,s.jsx)(n.code,{children:"FAISS"}),"\xa0component manages document ingestion into a FAISS Vector Store, optimizing document indexing and retrieval."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Embedding:"}),"\xa0Model used for vectorizing inputs."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Input:"}),"\xa0Documents to ingest."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Folder Path:"}),"\xa0Save path for the FAISS index, relative to Langflow."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["For more details, see the\xa0",(0,s.jsx)(n.a,{href:"https://faiss.ai/index.html",children:"FAISS Component Documentation"}),"."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"81ff12d7205940a3b14e3ddf304630f8",children:"FAISS Search"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"FAISSSearch"}),"\xa0searches a FAISS Vector Store for documents similar to a given input, using similarity metrics for efficient retrieval."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Embedding:"}),"\xa0Model used in the FAISS Vector Store."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Folder Path:"}),"\xa0Path to load the FAISS index from, relative to Langflow."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Input:"}),"\xa0Search query."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Index Name:"}),"\xa0Index identifier."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"eba8892f7a204b97ad1c353e82948149",children:"MongoDB Atlas"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"MongoDBAtlas"}),"\xa0builds a MongoDB Atlas-based vector store from Data, streamlining the storage and retrieval of documents."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Embedding:"}),"\xa0Model used by MongoDB Atlas."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Input:"}),"\xa0Documents or Data."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Collection Name:"}),"\xa0Collection identifier in MongoDB Atlas."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Database Name:"}),"\xa0Database identifier."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Index Name:"}),"\xa0Index identifier."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"MongoDB Atlas Cluster URI:"}),"\xa0Cluster URI."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Search Kwargs:"}),"\xa0Additional search parameters."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"NOTE"}),"\n",(0,s.jsx)(n.p,{children:"Ensure pymongo is installed for using MongoDB Atlas Vector Store."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"686ba0e30a54438cbc7153b81ee4b1df",children:"MongoDB Atlas Search"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"MongoDBAtlasSearch"}),"\xa0leverages the MongoDBAtlas component to search for documents based on similarity metrics."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Search Type:"}),'\xa0Type of search, such as "Similarity" or "MMR".']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Input:"}),"\xa0Search query."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Embedding:"}),"\xa0Model used in the Vector Store."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Collection Name:"}),"\xa0Collection identifier."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Database Name:"}),"\xa0Database identifier."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Index Name:"}),"\xa0Index identifier."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"MongoDB Atlas Cluster URI:"}),"\xa0Cluster URI."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Search Kwargs:"}),"\xa0Additional search parameters."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"7ceebdd84ab14f8e8589c13c58370e5b",children:"PGVector"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"PGVector"}),"\xa0integrates a Vector Store within a PostgreSQL database, allowing efficient storage and retrieval of vectors."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Input:"}),"\xa0Value for the Vector Store."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Embedding:"}),"\xa0Model used."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"PostgreSQL Server Connection String:"}),"\xa0Server URL."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Table:"}),"\xa0Table name in the PostgreSQL database."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["For more details, see the\xa0",(0,s.jsx)(n.a,{href:"https://python.langchain.com/docs/integrations/vectorstores/pgvector",children:"PGVector Component Documentation"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"NOTE"}),"\n",(0,s.jsx)(n.p,{children:"Ensure the PostgreSQL server is accessible and configured correctly."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"196bf22ea2844bdbba971b5082750943",children:"PGVector Search"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"PGVectorSearch"}),"\xa0extends\xa0",(0,s.jsx)(n.code,{children:"PGVector"}),"\xa0to search for documents based on similarity metrics."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Input:"}),"\xa0Search query."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Embedding:"}),"\xa0Model used."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"PostgreSQL Server Connection String:"}),"\xa0Server URL."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Table:"}),"\xa0Table name."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Search Type:"}),'\xa0Type of search, such as "Similarity" or "MMR".']}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"67abbe3e27c34fb4bcb35926ce831727",children:"Pinecone"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Pinecone"}),"\xa0constructs a Pinecone wrapper from Data, setting up Pinecone-based vector indexes for document storage and retrieval."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Input:"}),"\xa0Documents or Data."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Embedding:"}),"\xa0Model used."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Index Name:"}),"\xa0Index identifier."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Namespace:"}),"\xa0Namespace used."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Pinecone API Key:"}),"\xa0API key."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Pinecone Environment:"}),"\xa0Environment settings."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Search Kwargs:"}),"\xa0Additional search parameters."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Pool Threads:"}),"\xa0Number of threads."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"Ensure the Pinecone API key and environment are correctly configured."})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"977944558cad4cf2ba332ea4f06bf485",children:"Pinecone Search"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"PineconeSearch"}),"\xa0searches a Pinecone Vector Store for documents similar to the input, using advanced similarity metrics."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Search Type:"}),'\xa0Type of search, such as "Similarity" or "MMR".']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Input Value:"}),"\xa0Search query."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Embedding:"}),"\xa0Model used."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Index Name:"}),"\xa0Index identifier."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Namespace:"}),"\xa0Namespace used."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Pinecone API Key:"}),"\xa0API key."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Pinecone Environment:"}),"\xa0Environment settings."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Search Kwargs:"}),"\xa0Additional search parameters."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Pool Threads:"}),"\xa0Number of threads."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"88df77f3044e4ac6980950835a919fb0",children:"Qdrant"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Qdrant"}),"\xa0allows efficient similarity searches and retrieval operations, using a list of texts to construct a Qdrant wrapper."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Input:"}),"\xa0Documents or Data."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Embedding:"}),"\xa0Model used."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"API Key:"}),"\xa0Qdrant API key."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Collection Name:"}),"\xa0Collection identifier."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Advanced Settings:"}),"\xa0Includes content payload key, distance function, gRPC port, host, HTTPS, location, metadata payload key, path, port, prefer gRPC, prefix, search kwargs, timeout, URL."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"5ba5f8dca0f249d7ad00778f49901e6c",children:"Qdrant Search"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"QdrantSearch"}),"\xa0extends\xa0",(0,s.jsx)(n.code,{children:"Qdrant"}),"\xa0to search for documents similar to the input based on advanced similarity metrics."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Search Type:"}),'\xa0Type of search, such as "Similarity" or "MMR".']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Input Value:"}),"\xa0Search query."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Embedding:"}),"\xa0Model used."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"API Key:"}),"\xa0Qdrant API key."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Collection Name:"}),"\xa0Collection identifier."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Advanced Settings:"}),"\xa0Includes content payload key, distance function, gRPC port, host, HTTPS, location, metadata payload key, path, port, prefer gRPC, prefix, search kwargs, timeout, URL."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"a0fb8a9d244a40eb8439d0f8c22a2562",children:"Redis"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Redis"}),"\xa0manages a Vector Store in a Redis database, supporting efficient vector storage and retrieval."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Index Name:"}),"\xa0Default index name."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Input:"}),"\xa0Data for building the Redis Vector Store."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Embedding:"}),"\xa0Model used."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Schema:"}),"\xa0Optional schema file (.yaml) for document structure."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Redis Server Connection String:"}),"\xa0Server URL."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Redis Index:"}),"\xa0Optional index name."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["For detailed documentation, refer to the\xa0",(0,s.jsx)(n.a,{href:"https://python.langchain.com/docs/integrations/vectorstores/redis",children:"Redis Documentation"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"Ensure the Redis server URL and index name are configured correctly. Provide a schema if no documents are available."})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"80aea4da515f490e979c8576099ee880",children:"Redis Search"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"RedisSearch"}),"\xa0searches a Redis Vector Store for documents similar to the input."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Search Type:"}),'\xa0Type of search, such as "Similarity" or "MMR".']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Input Value:"}),"\xa0Search query."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Index Name:"}),"\xa0Default index name."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Embedding:"}),"\xa0Model used."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Schema:"}),"\xa0Optional schema file (.yaml) for document structure."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Redis Server Connection String:"}),"\xa0Server URL."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Redis Index:"}),"\xa0Optional index name."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"e86fb3cc507e4b5494f0a421f94e853b",children:"Supabase"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Supabase"}),"\xa0initializes a Supabase Vector Store from texts and embeddings, setting up an environment for efficient document retrieval."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Input:"}),"\xa0Documents or data."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Embedding:"}),"\xa0Model used."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Query Name:"}),"\xa0Optional query name."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Search Kwargs:"}),"\xa0Advanced search parameters."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Supabase Service Key:"}),"\xa0Service key."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Supabase URL:"}),"\xa0Instance URL."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Table Name:"}),"\xa0Optional table name."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"Ensure the Supabase service key, URL, and table name are properly configured."})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"fd02d550b9b2457f91f2f4073656cb09",children:"Supabase Search"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"SupabaseSearch"}),"\xa0searches a Supabase Vector Store for documents similar to the input."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Search Type:"}),'\xa0Type of search, such as "Similarity" or "MMR".']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Input Value:"}),"\xa0Search query."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Embedding:"}),"\xa0Model used."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Query Name:"}),"\xa0Optional query name."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Search Kwargs:"}),"\xa0Advanced search parameters."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Supabase Service Key:"}),"\xa0Service key."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Supabase URL:"}),"\xa0Instance URL."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Table Name:"}),"\xa0Optional table name."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"upstash-vector",children:"Upstash Vector"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"UpstashVector"})," searches a Upstash Vector Store for documents similar to the input. It has it's own embedding\nmodel which can be used to search documents without needing an external embedding model."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Index URL:"}),"\xa0The URL of the Upstash index."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Index Token:"}),"\xa0The token for the Upstash index."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Text Key:"}),"\xa0The key in the record to use as text."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Namespace:"}),"\xa0The namespace name. A new namespace is created if not found. Leave empty for default namespace."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Search Query:"}),"\xa0The search query."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Metadata Filter:"}),"\xa0The metadata filter. Filters documents by metadata. Look at the ",(0,s.jsx)(n.a,{href:"https://upstash.com/docs/vector/features/filtering",children:"docs"})," for more information."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Embedding:"}),"\xa0The embedding model used. To use Upstash's embeddings, don't provide an embedding."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Number of Results:"}),"\xa0The number of results to return."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"b4e05230b62a47c792a89c5511af97ac",children:"Vectara"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Vectara"}),"\xa0sets up a Vectara Vector Store from files or upserted data, optimizing document retrieval."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Vectara Customer ID:"}),"\xa0Customer ID."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Vectara Corpus ID:"}),"\xa0Corpus ID."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Vectara API Key:"}),"\xa0API key."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Files Url:"}),"\xa0Optional URLs for file initialization."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Input:"}),"\xa0Optional data for corpus upsert."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["For more information, consult the\xa0",(0,s.jsx)(n.a,{href:"https://python.langchain.com/docs/integrations/vectorstores/vectara",children:"Vectara Component Documentation"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"If inputs or files_url are provided, they will be processed accordingly."})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"31a47221c23f4fbba4a7465cf1d89eb0",children:"Vectara Search"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"VectaraSearch"}),"\xa0searches a Vectara Vector Store for documents based on the provided input."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Search Type:"}),'\xa0Type of search, such as "Similarity" or "MMR".']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Input Value:"}),"\xa0Search query."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Vectara Customer ID:"}),"\xa0Customer ID."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Vectara Corpus ID:"}),"\xa0Corpus ID."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Vectara API Key:"}),"\xa0API key."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Files Url:"}),"\xa0Optional URLs for file initialization."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"57c7969574b1418dbb079ac5fc8cd857",children:"Weaviate"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Weaviate"}),"\xa0facilitates a Weaviate Vector Store setup, optimizing text and document indexing and retrieval."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Weaviate URL:"}),"\xa0Default instance URL."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Search By Text:"}),"\xa0Indicates whether to search by text."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"API Key:"}),"\xa0Optional API key for authentication."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Index Name:"}),"\xa0Optional index name."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Text Key:"}),"\xa0Default text extraction key."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Input:"}),"\xa0Document or record."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Embedding:"}),"\xa0Model used."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Attributes:"}),"\xa0Optional additional attributes."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["For more details, see the\xa0",(0,s.jsx)(n.a,{href:"https://python.langchain.com/docs/integrations/vectorstores/weaviate",children:"Weaviate Component Documentation"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"NOTE"}),"\n",(0,s.jsx)(n.p,{children:"Ensure Weaviate instance is running and accessible. Verify API key, index name, text key, and attributes are set correctly."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"6d4e616dfd6143b28dc055bc1c40ecae",children:"Weaviate Search"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"WeaviateSearch"}),"\xa0searches a Weaviate Vector Store for documents similar to the input."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Search Type:"}),'\xa0Type of search, such as "Similarity" or "MMR".']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Input Value:"}),"\xa0Search query."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Weaviate URL:"}),"\xa0Default instance URL."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Search By Text:"}),"\xa0Indicates whether to search by text."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"API Key:"}),"\xa0Optional API key for authentication."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Index Name:"}),"\xa0Optional index name."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Text Key:"}),"\xa0Default text extraction key."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Embedding:"}),"\xa0Model used."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Attributes:"}),"\xa0Optional additional attributes."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>c});var s=r(6540);const i={},t=s.createContext(i);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);