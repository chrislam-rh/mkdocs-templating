# TKS – Platform High Level Design

## 1. Overview
- **Objective:** <describe why TKS is being built, business value>
- **Scope:** <in scope, out of scope>
- **Non-goals:** <what this HLD does not cover>

## 2. Cluster Architecture
- **Control plane model:** <Hosted Control Plane, ROSA, ARO, OKD, etc.>
- **Worker node pools:** <profiles, sizing, scaling approach>
- **Multi-tenancy & namespace strategy:** <how tenants are isolated>
- **Regions / sites / availability zones:** <list deployment footprints>

## 3. Platform Services
- **Networking:** Ingress controllers, Service Mesh, API Gateways
- **Security services:** Policy engines (OPA/Gatekeeper/Kyverno), Vault/KMS, certificate management
- **DevOps services:** CI/CD tooling, Image registry, Artifact repositories
- **Day-2 services:** Logging, Monitoring, Backup & Restore
- **Add-ons:** <ACM, ArgoCD, RHACM, etc.>

## 4. Security
- **Identity:** <SSO, OIDC, AD integration>
- **RBAC:** <model, binding strategy>
- **Network security:** <NetworkPolicy / MultiNetworkPolicy>
- **Image security:** <scanning, signing, SBOM>
- **Compliance:** <PCI, GDPR, ISO controls>

## 5. Observability & Operations
- **Metrics:** Prometheus, Thanos
- **Logging:** Loki, EFK, OpenSearch
- **Tracing:** Jaeger, Tempo, OpenTelemetry
- **Dashboards & alerts:** <links or standards>
- **Backup/DR:** <strategy, RPO/RTO>
- **Runbooks:** <where to find>

## 6. Lifecycle & Governance
- **Environment model:** <dev, test, stage, prod>
- **Promotion strategy:** <GitOps flows, pipelines>
- **Configuration management:** <Helm, Kustomize, ArgoCD>
- **ADR references:** <links>

## 7. Risks & Open Issues
- Key risks, mitigations
- Open decisions, owners, due dates

## 8. References
- Related HLDs
- ADRs
- Tesco internal documentation
