# TKS RBAC Standards

## 1. Principles
- **Least Privilege:** Grant only the permissions required for a role.
- **Separation of Duties:** Separate operational vs. development access.
- **Namespace Isolation:** Tenants restricted to their namespaces.
- **Auditability:** All role changes must be traceable through GitOps/PRs.

## 2. Role Model
- **Platform Roles**
  - `platform-admin` → full control across all namespaces.
  - `platform-readonly` → read-only across cluster.
- **Tenant Roles**
  - `tenant-admin` → admin rights within their own namespaces.
  - `tenant-developer` → limited create/update/delete in dev/test namespaces.
  - `tenant-reader` → read-only within tenant namespaces.

## 3. Role Bindings
- **Identity provider integration:** map AD/SSO groups → Kubernetes roles.
- **ServiceAccounts:** used for automation, CI/CD pipelines.
- **Binding strategy:** GitOps-managed RBAC definitions (ArgoCD/ACM).

## 4. Permission Matrix

| Role              | Namespace Scope       | Permissions                             |
|-------------------|-----------------------|-----------------------------------------|
| platform-admin    | *                     | \* (all verbs, all resources)           |
| platform-readonly | *                     | get, list, watch                        |
| tenant-admin      | tenant-<id>-*         | admin within tenant namespaces          |
| tenant-developer  | tenant-<id>-dev/test  | CRUD on workloads, read infra resources |
| tenant-reader     | tenant-<id>-*         | get, list, watch                        |

## 5. Patterns & Best Practices
- **Impersonation accounts:** restricted use for troubleshooting.
- **Break-glass roles:** temporary elevated access with audit logging.
- **Namespace labels:** used to auto-bind tenant roles.
- **Drift detection:** RBAC must match Git state.

## 6. Compliance & Audit
- RBAC definitions reviewed quarterly.
- All role requests go through Pull Request workflow.
- Automated drift detection alerts.
- Audit logs sent to Tesco SIEM.

## 7. Risks & Open Items
- Risk of privilege escalation if namespace boundaries are misconfigured.
- Pending decision: standard naming convention for AD/SSO groups.

## 8. References
- Kubernetes RBAC docs
- Tesco internal identity standards
- ADRs: RBAC-001, RBAC-002
