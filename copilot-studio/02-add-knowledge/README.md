# Exercise: Add Knowledge

## Exercise Overview

- **เวลา:** 10:45–12:00 (75 นาที)
- **เป้าหมาย:** เพิ่มไฟล์และ public website เป็น knowledge แล้วตรวจการตอบจากแหล่งที่กำหนด
- **ผลลัพธ์:** agent ที่มี 2 knowledge sources และ citation test

## Prerequisites

- Copilot Champion Assistant จาก Section 1
- ดาวน์โหลด [copilot-adoption-guide.docx](../../files/copilot-studio/copilot-adoption-guide.docx)
- public website ที่กำหนด: <https://learn.microsoft.com/en-us/copilot/>
- อ่านข้อจำกัดล่าสุดจาก [Microsoft guidance for public website knowledge](https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-add-public-website)

## Scenario 1: ให้คำตอบจากแหล่งที่เชื่อถือได้

เอเจนต์ต้องตอบคำถามการเริ่มใช้ Copilot จากคู่มือกลางและเว็บไซต์ทางการ หากไม่พบคำตอบ ต้องบอกข้อจำกัดแทนการคาดเดา

### Practice 1: Upload the guide

#### ขั้นตอนการทำกิจกรรม

1. เปิด agent แล้วไปที่ **Knowledge** เลือก **Add knowledge**

![เปิด Add knowledge](images/open-add-knowledge.png)

2. เลือก **Files** หรือ **Upload file** แล้วอัปโหลด `copilot-adoption-guide.docx`
3. ตั้งชื่อ source ให้สื่อความหมาย เช่น `Copilot adoption guide`
4. รอให้ **Status** เป็นพร้อมใช้งาน หากยัง processing ให้ทำขั้นถัดไปแล้วกลับมาตรวจ
5. เปิดรายละเอียด source และตรวจว่าชื่อไฟล์กับ description ถูกต้อง

### Practice 2: Add the fixed public website and test citations

#### ขั้นตอนการทำกิจกรรม

1. เลือก **Add knowledge** อีกครั้ง แล้วเลือก **Public websites**
2. ป้อน URL นี้เท่านั้น:

```text
https://learn.microsoft.com/en-us/copilot/
```

3. บันทึก source และรอให้พร้อมใช้งาน ระบบอาจจำกัด URL ตามรูปแบบ domain/subpath และ tenant policy
4. เปิด **Test your agent** แล้วถาม:

```text
จากคู่มือที่อัปโหลด ฉันควรตรวจอะไรบ้างก่อนใช้คำตอบจาก AI?
```

5. เปิด citation และยืนยันว่าอ้างถึงไฟล์ที่อัปโหลด
6. ถาม:

```text
จากเว็บไซต์ Microsoft ที่เชื่อมไว้ ช่วยอธิบายภาพรวม Copilot และแนบแหล่งอ้างอิง
```

7. ถามเรื่องที่ไม่มีใน source เช่น `นโยบายอนุมัติค่าใช้จ่ายของทีมฉันคืออะไร` และตรวจว่า agent ไม่แต่งคำตอบ
8. หาก trainer สาธิต **SharePoint** ให้สังเกต permission trimming; ไม่ต้องเพิ่มเองเมื่อผู้เรียนไม่มีสิทธิ์

## Checkpoint

- knowledge มีไฟล์หนึ่งรายการและ fixed public website หนึ่งรายการ
- เปิด citation แล้วกลับไปยัง source ที่ตรงกับคำตอบได้
- SharePoint เป็น trainer demo เมื่อ access ถูกจำกัด และการแชร์ agent ไม่ขยายสิทธิ์เข้าถึง SharePoint ของผู้ใช้

## สิ่งที่จะได้จาก exercise นี้

Copilot Champion Assistant ที่ตอบจาก guide และ Microsoft public website พร้อมปฏิเสธคำถามที่ไม่มีหลักฐาน

## Optional Extension

แก้ description ของ knowledge source ให้ระบุว่า source เหมาะกับคำถามชนิดใด แล้วทดสอบคำถามเดิมเพื่อดูว่าการเลือก source ดีขึ้นหรือไม่
