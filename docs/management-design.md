# Management Design (HLD)

## 1. Overview
- **System/Domain:** <name>
- **Owners:** <team/emails>
- **Summary:** <1–2 paragraphs explaining scope and purpose>

## 2. Scope & Goals
- **In scope:** <…>
- **Out of scope:** <…>
- **Success criteria:** <KPIs / SLOs>

## 3. Architecture
- **Context diagram:** ![Context Diagram](images/management-context.png)
- **Components:** <list CMDB items, repos, services>
- **Data flows:** <sources/sinks, formats, frequency>

## 4. Platform & Runtime
- Clusters/regions: <…>
- Compute/Storage/Network footprints: <…>
- Dependencies: <APIs, DBs, messaging systems>

## 5. Security
- Authentication & authorization model
- Secret management & KMS integration
- Data classification & encryption approach

## 6. Reliability & Operations
- SLOs / SLIs (availability, latency, error rate)
- Backup & DR (RPO/RTO)
- Runbooks & alerting strategy

## 7. Cost & Capacity
- Workload profiles
- Scaling approach (HPA/VPA/cluster autoscaler)
- Cost drivers & estimates

## 8. Risks & Decisions
- Key risks with mitigation plans
- ADR references

## 9. Open Issues
- <ID/Title/Owner/ETA>

## 10. References
- Links to related docs, repos, tickets
