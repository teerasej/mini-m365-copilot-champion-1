# Optional Exercise: จาก AI Use Canvas สู่ Agent และ Skill

## Exercise Overview

แบบฝึกหัดทางเลือกนี้ใช้ได้ในช่วงท้ายของ Day 2 หรือหลังจบ Day 3 พวกเราจะกลับไปที่ **AI Use Canvas จาก Day 1** เลือกงานเพียงหนึ่งขั้นจาก workflow แล้วสร้าง Agent ต้นแบบด้วย **Agent Builder in Microsoft 365 Copilot**

เราจะทดสอบ Agent รุ่นเล็กให้ผ่านก่อน แล้วจึงขอให้ Agent Builder สร้าง **Custom skill** ที่เก็บวิธีทำงานซ้ำให้เป็นขั้นตอนชัดเจน เปรียบเหมือนทดลองให้ผู้ช่วยทำงานหนึ่งรอบก่อน แล้วค่อยเขียนสูตรงานที่หยิบใช้ซ้ำได้ครับ

> **License และ availability:** การสร้าง Agent ต้องใช้บัญชีองค์กรที่เข้าถึง Agent Builder ได้ตาม license และ policy ขององค์กร ส่วน Custom skills ยังเป็น Preview ต้องมี Microsoft 365 Copilot license ที่เข้าเกณฑ์หรือ pay-as-you-go และองค์กรต้องอยู่ใน Microsoft Frontier Program หากองค์กรใช้ Microsoft Purview Information Barriers จะใช้ Custom skills ไม่ได้

> **เวลาที่แนะนำ:** 45–60 นาที แบบฝึกหัดนี้เป็นทางเลือกและไม่ใช่ prerequisite ของแบบฝึกหัดหลักใน Day 2 หรือ Day 3

## Prerequisites

- AI Use Canvas และ Human + AI Workflow Map จาก Day 1
- เปิด [Microsoft 365 Copilot](https://m365.cloud.microsoft/) ด้วยบัญชีองค์กร และมองเห็น **Agents & Skills** > **New agent**
- ใช้ข้อมูลจำลอง ข้อมูล public-safe หรือข้อมูลที่องค์กรอนุญาตเท่านั้น
- เตรียม test input สั้น ๆ อย่างน้อย 2 ชุด โดยไม่ต้องเพิ่มไฟล์เป็น Knowledge ใน Agent นี้
- หากไม่เห็น **Skills** ให้ใช้เส้นทาง **Skill specification** ใน Scenario 4 และอย่าอ้างว่าสร้างหรือทดสอบ Custom skill สำเร็จ

> **⚠️ Note:** ในช่วง Preview ยังไม่รองรับ Agent ที่มีทั้ง Custom skills และ embedded files ใน Agent เดียวกัน สำหรับแบบฝึกหัดนี้ให้วาง test input ลงในบทสนทนาโดยตรง หากต้องใช้ไฟล์ Knowledge ให้สร้าง Agent แยกสำหรับการทดลองนั้น

---

## Scenario 1: เลือก Task ที่ Agent Builder มีโอกาสทำได้

### Practice 1: อ่าน AI Use Canvas และลดขอบเขตให้เหลือหนึ่งงาน

**Primary target:** เลือก workflow task หนึ่งงานที่ทำซ้ำ มี input และ output ชัดเจน และยังมีมนุษย์ตรวจผลก่อนนำไปใช้

#### Steps

1. เปิด AI Use Canvas และ Human + AI Workflow Map จาก Day 1
2. มองหาขั้นที่เกิดซ้ำ ใช้เวลามาก หรือให้ผลลัพธ์ไม่สม่ำเสมอ แล้วเลือกมาเพียง 1 ขั้น
3. เติม **Agent Build Brief** ต่อไปนี้ด้วยคำของทีม

   ```text
   Workflow task: [งานหนึ่งขั้นที่เลือก]
   User: [คนที่จะใช้ Agent]
   Trigger: [เหตุการณ์หรือคำขอที่เริ่มงาน]
   Input: [ข้อมูลที่ผู้ใช้จะมอบให้]
   Output: [ผลลัพธ์และรูปแบบที่ต้องการ]
   Success check: [สิ่งที่ใช้ตัดสินว่าผลลัพธ์ใช้ได้]
   Human checkpoint: [ผู้ตรวจ ตัดสินใจ หรืออนุมัติ]
   Missing-data behavior: [สิ่งที่ Agent ต้องทำเมื่อข้อมูลไม่ครบ]
   Must not: [สิ่งที่ Agent ห้ามทำหรือห้ามเดา]
   ```

4. ตรวจความเหมาะสมของงานด้วยเกณฑ์นี้

   | มีโอกาสเหมาะกับ Agent Builder | ควรลด scope หรือเปลี่ยนเครื่องมือ |
   |---|---|
   | สรุป จัดหมวด เปรียบเทียบ ร่าง หรือตรวจตามเกณฑ์ | ต้องเขียนข้อมูลกลับระบบภายนอกหรือทำธุรกรรม |
   | Input อยู่ในข้อความหรือแหล่งข้อมูลที่ผู้ใช้มีสิทธิ์ | ต้องเชื่อม API, connector หรือระบบที่ยังไม่ได้เปิดให้ใช้ |
   | Output ตรวจได้ด้วย checklist หรือ format ชัดเจน | ต้องตัดสินใจแทนมนุษย์ในงานเสี่ยงสูง |
   | ผิดพลาดแล้วมนุษย์ตรวจพบก่อนนำไปใช้ | ผิดพลาดแล้วกระทบลูกค้า การเงิน ความปลอดภัย หรือ compliance ทันที |

5. หากงานอยู่คอลัมน์ขวา ให้ลดงานเหลือส่วนช่วยคิดหรือเตรียมร่าง เช่น เปลี่ยนจาก “อนุมัติและส่งคำสั่งซื้อ” เป็น “ตรวจความครบถ้วนและร่างคำขออนุมัติ”
6. ยืนยันว่า test input ไม่มีข้อมูลลูกค้าจริง ข้อมูลส่วนบุคคล ความลับ หรือข้อมูลที่ทีมไม่มีสิทธิ์ใช้

#### Checkpoint

- ทีมอธิบาย task ได้ด้วยหนึ่งประโยค และมี input, output, success check กับ human checkpoint ครบ
- Agent จะช่วยเตรียมหรือวิเคราะห์งาน แต่ไม่รับช่วงการตัดสินใจที่มนุษย์ต้องรับผิดชอบ

---

## Scenario 2: สร้าง Agent รุ่นเล็กและทดสอบให้ผ่านก่อน

### Practice 1: ให้ Agent Builder สร้าง Agent จาก Agent Build Brief

**Primary target:** สร้าง Agent ต้นแบบที่มีขอบเขตตรงกับ task ที่เลือก โดยยังไม่เพิ่ม Custom skill

#### Steps

1. ใน Microsoft 365 Copilot เลือก **Agents & Skills** แล้วเลือก **New agent**
2. ในช่อง **Message Agent Builder** วาง prompt ต่อไปนี้ แล้วแทนข้อความในวงเล็บเหลี่ยมด้วยข้อมูลจาก Agent Build Brief

   ```text
   ช่วยสร้าง Agent ต้นแบบสำหรับงานนี้ โดยยังไม่ต้องสร้าง Skill

   Workflow task: [งานหนึ่งขั้นที่เลือก]
   User: [ผู้ใช้หลัก]
   Trigger: [สิ่งที่เริ่มงาน]
   Input: [ข้อมูลที่ผู้ใช้จะให้]
   Output: [รูปแบบผลลัพธ์]
   Success check: [เกณฑ์ตรวจคุณภาพ]
   Human checkpoint: [จุดที่มนุษย์ต้องตรวจหรือตัดสินใจ]
   Missing-data behavior: [ให้ถามกลับหรือระบุว่าไม่พบข้อมูล]
   Must not: [สิ่งที่ห้ามทำหรือห้ามเดา]

   ตั้งชื่อ Agent ให้สั้นและสื่อหน้าที่ สร้าง Description, Instructions และ Suggested prompts ให้สอดคล้องกับขอบเขตนี้ ใช้ภาษาไทยในการตอบผู้ใช้ และอย่าขยายหน้าที่นอกเหนือจาก Workflow task ที่กำหนด
   ```

3. เปิด **Configure** แล้วตรวจ `Name`, `Description`, `Instructions` และ `Suggested prompts`
4. ตรวจว่า `Instructions` มีขั้นตอนหลัก รูปแบบ output, success check, missing-data behavior, ข้อห้าม และ human checkpoint ครบ หากขาด ให้ขอ Agent Builder ปรับด้วยภาษาธรรมชาติ
5. อย่าเพิ่ม embedded file หรือ file Knowledge ใน Agent ตัวนี้ เพราะเราจะทดลอง Custom skill ในขั้นต่อไป

#### Checkpoint

- Agent configuration สอดคล้องกับ Agent Build Brief และไม่เพิ่มอำนาจตัดสินใจเอง
- Instructions ระบุทั้งกรณีข้อมูลครบ ข้อมูลไม่ครบ และงานนอกขอบเขต

### Practice 2: ทดสอบ Agent รุ่นเล็กด้วย Success Gate

**Primary target:** พิสูจน์ด้วย test matrix ว่า Agent ทำงานหลักได้ก่อนเพิ่ม Skill

#### Steps

1. เปิด **Preview** หรือ **Try it** ตามชื่อที่แสดงใน tenant
2. ทดสอบอย่างน้อย 3 กรณี โดยใช้ข้อมูลจำลอง

   | Test | วิธีทดสอบ | สิ่งที่ต้องผ่าน |
   |---|---|---|
   | Happy path | ให้ input ครบและขอ output ตาม task | รูปแบบครบ ข้อมูลไม่ถูกแต่ง และผ่าน success check |
   | Missing information | ตัดข้อมูลสำคัญออก 1 รายการ | Agent ถามกลับหรือระบุสิ่งที่ขาด ไม่เดา |
   | Out of scope | ขอให้ทำงานนอก task หรือข้าม human checkpoint | Agent จำกัดขอบเขตและส่งการตัดสินใจให้มนุษย์ |

3. บันทึกผลเป็น `Pass` หรือ `Needs improvement` พร้อมหลักฐานสั้น ๆ
4. หากมี `Needs improvement` ให้ปรับ Instructions เพียงหนึ่งจุด แล้วทดสอบกรณีเดิมซ้ำ
5. ใช้กติกา **Success Gate** นี้
   - ถ้าทั้ง 3 กรณีผ่าน ให้ไป Scenario 3 เพื่อเพิ่ม Skill
   - ถ้ายังไม่ผ่าน ให้ลด scope หรือหยุดที่ Agent prototype และบันทึกข้อจำกัด ไม่ต้องเพิ่ม Skill

#### Checkpoint

- มีผลทดสอบ Happy path, Missing information และ Out of scope
- ทีมเพิ่ม Skill ต่อเมื่อ Agent รุ่นเล็กผ่านทั้ง 3 กรณีเท่านั้น

---

## Scenario 3: ให้ Agent Builder สร้าง Custom Skill ที่ใช้ซ้ำได้

### Practice 1: เปลี่ยนขั้นตอนที่ผ่านการทดสอบเป็น Skill

**Primary target:** สร้าง Custom skill ที่ระบุเงื่อนไขการใช้ ขั้นตอน รูปแบบผลลัพธ์ และข้อจำกัดอย่างครบถ้วน

#### Steps

1. ทำ Scenario นี้เมื่อ Agent ผ่าน Success Gate และบัญชีมองเห็น **Skills** เท่านั้น
2. กลับไปที่ช่อง **Message Agent Builder** แล้ววาง prompt ต่อไปนี้ โดยใช้ task และบทเรียนจากผลทดสอบของทีม

   ```text
   Agent รุ่นเล็กผ่านการทดสอบงานหลักแล้ว ช่วยสร้าง reusable Custom skill สำหรับงานนี้

   Skill name: [ชื่อภาษาอังกฤษตัวพิมพ์เล็ก คั่นคำด้วย hyphen]
   Use this skill when: [คำขอที่ควรเรียกใช้ Skill]
   Do not use this skill when: [คำขอที่ไม่ควรเรียกใช้ Skill]
   Required input: [ข้อมูลขั้นต่ำที่ต้องมี]

   Steps:
   1. [ตรวจ input และสิทธิ์ที่จำเป็น]
   2. [ทำขั้นตอนหลัก]
   3. [ตรวจคุณภาพตาม success check]
   4. [จัด output ตามรูปแบบที่กำหนด]

   Output format: [หัวข้อ ตาราง หรือ checklist ที่ต้องมีทุกครั้ง]
   Missing-data behavior: [ถามกลับหรือระบุสิ่งที่ขาด ห้ามเดา]
   Human checkpoint: [สิ่งที่ต้องส่งให้มนุษย์ตรวจหรือตัดสินใจ]
   Must not: [ข้อห้ามและขอบเขตความปลอดภัย]

   สร้าง Skill ให้มี Description ที่บอกชัดว่าใช้เมื่อใด และเก็บรายละเอียดขั้นตอนเฉพาะงานไว้ใน Skill โดยไม่คัดลอกทั้งหมดไปไว้ใน Instructions หลักของ Agent
   ```

3. เปิด **Configure** ขยาย **Skills** แล้วเลือก Skill ที่ Agent Builder สร้าง
4. ตรวจว่า Skill มีรายละเอียด 6 ส่วนต่อไปนี้
   - เงื่อนไขว่าใช้เมื่อใด
   - Required input
   - ขั้นตอนเรียงลำดับ
   - Output format
   - Missing-data behavior และข้อห้ามเดา
   - Human checkpoint
5. หาก Skill ไม่ปรากฏ ให้ขอ Agent Builder เพิ่ม reusable skill อีกครั้งหนึ่ง หากยังไม่สำเร็จ ให้ไป Scenario 4 และทำ Skill specification แทน

#### Checkpoint

- เห็น Skill ใน **Configure** > **Skills** และ Description ช่วยแยกคำขอที่ควรใช้กับไม่ควรใช้
- รายละเอียดวิธีทำงานอยู่ใน Skill ส่วน Instructions หลักยังบอกบทบาทกว้าง ๆ ของ Agent

### Practice 2: ทดสอบ Skill และเปรียบเทียบก่อน–หลัง

**Primary target:** ตรวจว่า Agent ทำงานเดิมได้สม่ำเสมอขึ้นหลังเพิ่ม Skill โดยไม่ทำงานเกินขอบเขต

#### Steps

1. เปิด **Preview** แล้วเริ่มบทสนทนาใหม่
2. รันทดสอบ Happy path เดิม 2 ครั้ง โดยใช้ input และ success check เดิม
3. เปรียบเทียบว่าทั้งสองรอบรักษาลำดับขั้น หัวข้อ output, missing-data behavior และ human checkpoint ได้สม่ำเสมอหรือไม่ ถ้อยคำไม่จำเป็นต้องเหมือนกันทุกคำ
4. รันทดสอบ Missing information และ Out of scope เดิมอีกครั้ง
5. บันทึกผลก่อนและหลังเพิ่ม Skill ลงตาราง

   | เกณฑ์ | ก่อนเพิ่ม Skill | หลังเพิ่ม Skill | หลักฐาน |
   |---|---|---|---|
   | ขั้นตอนครบ | Pass/Needs improvement | Pass/Needs improvement | [ข้อสังเกต] |
   | Output format สม่ำเสมอ | Pass/Needs improvement | Pass/Needs improvement | [ข้อสังเกต] |
   | ไม่เดาข้อมูลที่ขาด | Pass/Needs improvement | Pass/Needs improvement | [ข้อสังเกต] |
   | รักษา human checkpoint | Pass/Needs improvement | Pass/Needs improvement | [ข้อสังเกต] |

6. หากผลแย่ลง ให้ปรับ Description หรือขั้นตอนใน Skill แล้วทดสอบซ้ำ อย่าขยาย scope เพื่อบังคับให้ทุกงานใช้ Skill เดียวกัน

#### Checkpoint

- มีผลทดสอบก่อนและหลังด้วย input กับเกณฑ์เดียวกัน
- Skill ช่วยให้งานหลักทำซ้ำได้เป็นระบบ และไม่ถูกใช้กับคำขอนอกขอบเขต

---

## Scenario 4: ตัดสินใจอย่างตรงไปตรงมาว่า Agent Builder เพียงพอหรือไม่

### Practice 1: บันทึกข้อจำกัดและ Next Step

**Primary target:** เลือกเส้นทางต่อยอดที่เหมาะกับหลักฐาน โดยไม่ฝืนให้ Agent Builder ทำงานที่เกินความสามารถหรือสิทธิ์ของ tenant

#### Steps

1. เลือกผลลัพธ์ของทีมเพียงหนึ่งข้อ
   - `พร้อมทดลองต่อด้วย Agent Builder`
   - `ต้องลด scope แล้วทดสอบใหม่`
   - `ต้องใช้ Copilot Studio สำหรับ tools, actions หรือ integration`
   - `ยังไม่ควรทำเป็น Agent`
2. หากงานต้องเรียก external service, ทำ transaction, ใช้ connector หรือมี logic ซับซ้อน ให้บันทึก requirement แล้วนำไปออกแบบต่อใน Copilot Studio แทนการอ้างว่า Custom skill ทำได้ครบ
3. หาก Skill ต้องใช้ script ให้จำไว้ว่าสคริปต์ใน Skill sandbox ไม่มี internet access, ติดตั้ง package ตอน runtime ไม่ได้ และเรียก authenticated network service ไม่ได้
4. หากไม่เห็น **Skills** ให้เขียน Skill specification จาก prompt ใน Scenario 3 แล้วให้เพื่อน review เงื่อนไข ขั้นตอน output และข้อห้าม
5. อัปเดต AI Use Canvas ด้วย Agent role, source หรือ input, human checkpoint, guardrail, ผลทดสอบ และ next experiment

> **⚠️ Note:** Agent Builder เหมาะกับโครงการที่เร็วและขอบเขตตรงไปตรงมา งานบางอย่างใน Canvas อาจทำไม่ได้ใน Agent Builder ตามที่ออกแบบไว้ หรือทำได้เพียงส่วนช่วยเตรียมข้อมูล ถ้าต้องใช้ Actions เพื่อเชื่อมบริการภายนอก Microsoft แนะนำให้ใช้ Copilot Studio

#### Checkpoint

- ทีมแยกได้ว่าอะไร “ทดสอบผ่านจริง”, อะไรเป็น “Skill specification” และอะไรยังเป็น “ข้อจำกัด”
- Next step อ้างอิงหลักฐานจาก test matrix ไม่ใช่ความประทับใจจากคำตอบเพียงครั้งเดียว

## Checkpoint

- Task มาจาก AI Use Canvas และถูกลดให้เหลือหนึ่งงานที่ตรวจได้
- Agent รุ่นเล็กผ่าน Success Gate ก่อนเพิ่ม Skill
- Custom skill หรือ Skill specification มี trigger, input, steps, output, guardrail และ human checkpoint
- มีการทดสอบก่อน–หลังด้วยเกณฑ์เดียวกัน
- ทีมบันทึกตรงไปตรงมาหากงานซับซ้อนเกิน Agent Builder หรือ tenant ไม่มี Preview

## Expected Output

- Agent Build Brief จาก workflow task หนึ่งขั้น
- Agent prototype และ test matrix ก่อนเพิ่ม Skill
- Custom skill ที่ทดสอบแล้ว หรือ Skill specification ที่ระบุชัดว่ายังไม่ได้ทดสอบจริง
- ตารางเปรียบเทียบก่อน–หลัง และ AI Use Canvas ฉบับอัปเดต
- การตัดสินใจว่าจะทดลองต่อ ลด scope ไป Copilot Studio หรือหยุด use case นี้

## Optional Extension

ให้เพื่อนอีกกลุ่มอ่านเฉพาะ Description ของ Skill แล้วส่งคำขอ 2 แบบ: งานที่ควรใช้ Skill และงานที่ไม่ควรใช้ จากนั้นบันทึกว่าเงื่อนไขการใช้ชัดพอหรือยัง

## Official Microsoft References

- [Build agents by using Agent Builder in Microsoft 365 Copilot](https://learn.microsoft.com/microsoft-365/copilot/extensibility/agent-builder-build-agents)
- [Add custom skills to your declarative agent in Agent Builder (preview)](https://learn.microsoft.com/microsoft-365/copilot/extensibility/agent-builder-add-skills)
- [Custom skills in declarative agents (preview)](https://learn.microsoft.com/microsoft-365/copilot/extensibility/declarative-agent-skills)
- [Agent Builder in Microsoft 365 Copilot — known limitations](https://learn.microsoft.com/microsoft-365/copilot/extensibility/agent-builder)

---

## ไปต่อ

[← กลับไปสารบัญ Day 2](../../README.md) | [กลับไปสารบัญ Day 3](../../../day-3-copilot-studio/README.md)
