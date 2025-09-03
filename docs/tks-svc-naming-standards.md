# TKS Service Naming Standards

## 1. Purpose
Consistent service naming ensures:
- Predictability for developers and operators.
- Alignment with Tesco’s enterprise naming conventions.
- Compatibility with DNS, certificates, and monitoring systems.

## 2. Naming Convention
General format:


- **org** → `tesco`
- **team** → business unit or product team name (short form)
- **service** → logical service name
- **env** → `dev`, `test`, `stage`, `prod`
- **region** → region or site code (`uks`, `uke`, `gcp-eu`, etc.)

### Rules
- Lowercase alphanumeric and `-` only.
- Maximum length: 63 characters (Kubernetes DNS label limit).
- Must start with a letter.
- No trailing hyphens.

## 3. Examples
- `tesco-payments-api-prod-uks`
- `tesco-catalog-worker-dev-uke`
- `tesco-search-ui-stage-gcp-eu`

## 4. Reserved Words
The following words may not be used as `team` or `service` values:
- `core`
- `shared`
- `platform`
- `infra`

## 5. Validation (Regex)


This regex enforces lowercase words separated by hyphens, 3–6 segments.

## 6. DNS & Certificates
- Service names must be valid Kubernetes DNS subdomains.
- Wildcard and SAN certificates should match naming conventions.
- Certificate rotation must align with service naming scheme.

## 7. Ownership & Review
- Naming requests reviewed by platform team.
- Automated validation runs in CI/CD pipelines.
- Violations block deployments until corrected.

## 8. Risks & Open Items
- Teams may attempt to shorten names excessively → ambiguity risk.
- Pending decision: whether to enforce standard across all namespaces.

## 9. References
- [Kubernetes DNS Label Names](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#dns-label-names)
- Tesco internal naming ADRs
