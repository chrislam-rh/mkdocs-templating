# VMaaS High Level Design

## 1. Overview
- **Objective:** Provide Virtual Machine as a Service on OpenShift Virtualization (KubeVirt).
- **Business Value:** Enable Tesco teams to run VM workloads alongside containers.
- **Scope:** VM provisioning, lifecycle management, storage, networking, RBAC, observability.
- **Non-Goals:** Application-specific functional testing.

## 2. Architecture
- **Platform:** OpenShift Virtualization (KubeVirt).
- **Core components:** virt-api, virt-controller, virt-handler, CDI, HCO.
- **VM templates:** base OS images (RHEL, Windows, Ubuntu).
- **Storage integration:** <Ceph / Portworx / SAN backends>.
- **Networking:** Multus-based secondary interfaces, VLAN trunking.
- **Namespaces:** One namespace per business group.

## 3. Provisioning & Lifecycle
- VM creation from templates.
- Snapshots and cloning support.
- Live migration policies.
- Backup & restore integration.
- Scaling strategy (per BG, quota limits).

## 4. Security
- **Isolation:** Namespaces + MultiNetworkPolicy.
- **RBAC:** Tenant-admin, tenant-developer roles.
- **Image provenance:** signed golden images, scanning for vulnerabilities.
- **Secrets:** mounted via Kubernetes Secrets, sealed-secrets for GitOps.

## 5. Operations
- **Monitoring:** VM metrics (CPU, memory, disk I/O).
- **Logging:** VM console logs → cluster logging stack.
- **Alerting:** integrated with Prometheus/Grafana.
- **Day-2 Ops:** patching golden images, policy enforcement.

## 6. Backup & Disaster Recovery
- **RPO/RTO targets:** <define>
- **Tooling:** Velero, OADP, or vendor-specific backup.
- **Replication:** across regions / AZs.

## 7. Risks & Decisions
- Storage backend performance variability.
- VLAN overlap between tenants.
- Pending decision: standard template catalog.

## 8. References
- [OpenShift Virtualization Docs](https://docs.openshift.com/container-platform/latest/virt/about-virt.html)
- Tesco internal ADRs
- Vendor documentation
