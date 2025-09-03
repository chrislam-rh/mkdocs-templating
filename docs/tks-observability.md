# TKS Observability

## 1. Goals
- Provide **end-to-end visibility** of platform health, performance, and reliability.
- Enable **SLO-based operations** with actionable alerts and dashboards.
- Ensure compliance with Tesco monitoring and logging standards.

## 2. Metrics
- **Stack:** Prometheus, Thanos, OpenMetrics exporters
- **SLIs / SLOs:**
  - Availability (uptime %, error budgets)
  - Latency (P95, P99 response times)
  - Saturation (CPU, memory, storage, network)
  - Error rate (5xx / failed requests)
- **Retention & storage:** <how long metrics are kept, where they’re stored>
- **Cardinality management:** <strategies to reduce high-cardinality metrics>

## 3. Logs
- **Stack:** Loki, EFK (Elasticsearch / Fluentd / Kibana), or OpenSearch
- **Log sources:** cluster components, applications, infrastructure
- **Log retention:** <days/months, per-class logs>
- **Compliance:** redact PII, align with GDPR
- **Access model:** RBAC-controlled access to logs

## 4. Traces
- **Stack:** Jaeger, Tempo, or OpenTelemetry
- **Use cases:** distributed tracing for microservices
- **Sampling strategy:** <always / probability-based / per-service>
- **Retention:** <duration, storage backends>

## 5. Dashboards & Alerts
- **Dashboards:** Grafana standard dashboards, team-specific dashboards
- **Alerting rules:** critical SLO breaches, saturation thresholds, infra failures
- **Runbook links:** integrate alerts with troubleshooting guides
- **Escalation:** integrate with Tesco’s incident management system

## 6. On-call & Incident Management
- **Paging tools:** <PagerDuty / OpsGenie / ServiceNow>
- **Escalation policy:** 1st line, 2nd line, platform engineering
- **Incident process:** detection → mitigation → RCA → postmortem

## 7. Integration Points
- CI/CD pipelines (metrics for build/deploy success)
- Security tooling (SIEM, IDS, vulnerability scans)
- Business KPIs dashboards

## 8. Risks & Open Items
- <risks, gaps, pending design decisions>

## 9. References
- Grafana dashboards: <links>
- Alert policies: <repo or ADRs>
- Tesco internal monitoring standards
