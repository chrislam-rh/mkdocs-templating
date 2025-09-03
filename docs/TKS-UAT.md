# TKS User Acceptance Testing (UAT)

## 1. Objectives
- Validate the Tesco Kubernetes Service (TKS) MVP delivered during the Red Hat engagement.
- Confirm platform foundation, integrations, and day-2 operations meet requirements.
- Ensure governance and standards (RBAC, networking, observability, naming) are enforced.

## 2. Scope
- **In scope:** validation of platform services, lifecycle, and integration.
- **Out of scope:** application-specific functional tests.

## 3. Test Environment
- **Cluster type/version:** <OpenShift version, HCP model>
- **Regions / sites:** <list locations>
- **Test accounts:** <SSO/AD groups, ServiceAccounts>
- **Prerequisites:** <bootstrap scripts, baseline policies>

## 4. Test Plan

### 4.1 Access & Authentication
| ID        | Scenario | Steps | Expected | Evidence |
|-----------|----------|-------|----------|----------|
| UAT-AUTH-01 | Login via SSO | User logs in with Tesco AD account | Successful login, correct RBAC role applied | Screenshot of console |
| UAT-AUTH-02 | ServiceAccount access | Deploy app using ServiceAccount | App can access only permitted resources | Pod logs, audit logs |

### 4.2 ACM Policy Management
| ID          | Scenario | Steps | Expected | Evidence |
|-------------|----------|-------|----------|----------|
| UAT-ACM-01 | Policy deployment | Apply baseline ACM policy | Policy enforced across clusters | Console screenshot |
| UAT-ACM-02 | Policy update | Modify ACM repo and sync | Policy auto-updates in cluster | Git commit, ACM dashboard |

### 4.3 Networking
| ID          | Scenario | Steps | Expected | Evidence |
|-------------|----------|-------|----------|----------|
| UAT-NET-01 | Baseline MultiNetworkPolicy | Apply baseline rules | Traffic restricted as expected | Connectivity test logs |
| UAT-NET-02 | Tenant policy isolation | Apply tenant-specific rules | Tenant traffic isolated | Logs, packet capture |

### 4.4 Observability
| ID          | Scenario | Steps | Expected | Evidence |
|-------------|----------|-------|----------|----------|
| UAT-OBS-01 | Metrics available | Check Prometheus targets | All critical targets healthy | Prometheus UI |
| UAT-OBS-02 | Logs searchable | Query logs for pod | Logs visible in UI, PII redacted | Console screenshot |
| UAT-OBS-03 | Evidence via console | Validate alerts visible | Alerts display in OpenShift console | Screenshot |

### 4.5 Storage
| ID          | Scenario | Steps | Expected | Evidence |
|-------------|----------|-------|----------|----------|
| UAT-STOR-01 | PVC provisioning | Deploy workload with PVC | PVC bound successfully | Pod logs |
| UAT-STOR-02 | PV access modes | Test RWO/RWX claims | Expected behavior observed | Workload status |
> Note: Hosted cluster creation test is included in **4.7**, successful cluster creation implies PV provisioning.

### 4.6 Lifecycle
| ID          | Scenario | Steps | Expected | Evidence |
|-------------|----------|-------|----------|----------|
| UAT-LIFE-01 | Policy lifecycle | Change ACM repo ref | Policy auto-updates | ACM dashboard |

### 4.7 Cluster Provisioning
| ID          | Scenario | Steps | Expected | Evidence |
|-------------|----------|-------|----------|----------|
| UAT-CLSTR-01 | Hosted cluster creation | Provision via CLI/API | Cluster created successfully | kubeconfig, console view |

## 5. Exit Criteria
- 100% of critical test cases must pass.
- No unresolved high-severity defects.
- Sign-off from platform owner, security lead, and Red Hat architect.

## 6. Risks & Mitigations
- Risk: Drift between ACM policies and live cluster → Mitigation: GitOps validation.
- Risk: Network overlap between tenants → Mitigation: enforced VLAN mapping.

## 7. Sign-off
- **Product Owner:** <name/date>
- **Platform Lead:** <name/date>
- **Security:** <name/date>
