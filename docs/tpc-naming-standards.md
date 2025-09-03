# TPC Naming Standards

## 1. Purpose
Consistent naming of Tesco Platform Components (TPC) ensures:
- Predictability for developers, operators, and auditors.
- Alignment with Tesco enterprise-wide naming rules.
- Compatibility with Kubernetes, DNS, and cloud provider constraints.

## 2. Scope
This document applies to:
- Git repositories
- Container images
- Clusters and namespaces
- Storage buckets
- Messaging topics/queues
- Any platform-level shared resources

## 3. General Rules
- Lowercase alphanumeric and hyphens (`-`) only.
- Maximum length: 63 characters (Kubernetes DNS label limit).
- Must start with a letter and end with alphanumeric.
- Hyphen-separated segments preferred (`team-service-env`).

## 4. Patterns & Examples

### 4.1 Git Repositories
Example: `tesco-payments-api`

### 4.2 Container Images
Example: `ghcr.io/tesco/catalog/api:1.0.0`

### 4.3 Clusters
Example: `tks-uks-prod`

### 4.4 Namespaces
Example: `payments-api-prod`

### 4.5 Storage Buckets
Example: `tesco-catalog-backup-uks`

### 4.6 Messaging Topics/Queues
Example: `payments.api.transaction.prod`

## 5. Reserved Words
Do not use the following as standalone names:
- `core`
- `shared`
- `infra`
- `platform`

## 6. Validation
- Regex checks in CI/CD pipelines.
- Pre-commit hooks for developers.
- Automated enforcement in GitHub Actions.

**Sample Regex for namespaces:**

## 7. Migration Strategy
- Legacy resources renamed during scheduled maintenance.
- Redirects/aliases applied where possible.
- Documented change logs.

## 8. Risks & Open Items
- Long names may exceed character limits in some cloud providers.
- Pending decision: standard abbreviations for regions (`uks`, `uke`, etc.).

## 9. References
- [Kubernetes Resource Names](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/)
- Tesco ADRs for naming conventions
