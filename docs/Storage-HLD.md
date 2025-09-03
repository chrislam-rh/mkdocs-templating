# Storage High Level Design

## 1. Requirements
- **Performance:** <IOPS / latency targets>
- **Availability:** <multi-AZ, replication factor, HA requirements>
- **Data services:** <snapshots, cloning, encryption, tiering>
- **Compliance:** <GDPR, PCI-DSS, ISO27001, etc.>

## 2. Logical Architecture
- **Storage classes:** <gold/silver/bronze or equivalent>
- **Access modes:** RWO / RWX / ROX
- **Backup & restore strategy:** <tooling, cadence, retention>

## 3. Physical / Cloud Mapping
- **Backends:** <Ceph, Portworx, EBS, SAN, NAS, etc.>
- **Topology & zones:** <multi-AZ, replication strategy>
- **Quotas / limits:** <namespace quotas, project limits, per-class caps>

## 4. Security & Compliance
- **Encryption at rest:** <method / provider>
- **Encryption in transit:** <TLS, IPSec, etc.>
- **Key management:** <KMS provider, rotation policy>
- **PII / sensitive data handling:** <masking, segregation>

## 5. Operations & Monitoring
- **SLIs/SLOs:** latency, throughput, saturation, error rate
- **Dashboards & alerts:** <links to Grafana / Kibana>
- **Runbooks:** <links to operational runbooks>
- **Capacity planning:** <monitoring, forecasting approach>

## 6. Risks & Constraints
- <e.g., limited replication support, dependency on single vendor, etc.>

## 7. References
- Related ADRs
- Vendor documentation
- Tesco internal wikis
