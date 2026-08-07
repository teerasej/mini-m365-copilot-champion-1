
# Exercise: สร้าง Presentation จากไฟล์ด้วย Copilot in PowerPoint

## Exercise Overview

เราจะใช้ Copilot in PowerPoint เปลี่ยนข้อมูลจาก `Business Idea.docx` ให้เป็น Presentation ภาษาไทย และตรวจสอบสไลด์ก่อนนำไปใช้งาน

## Prerequisites

1. มี Microsoft 365 Copilot license
2. อัพโหลด `Business Idea.docx` ไปยัง OneDrive แล้ว
3. เปิด PowerPoint บน Web ด้วยบัญชีองค์กร

## Scenario 1: สร้าง Presentation สำหรับนำเสนอแนวคิดธุรกิจ

### Practice 1: สร้างสไลด์จากไฟล์อ้างอิง 

#### Steps

1. เปิด PowerPoint บน Web เช่นการกด [https://www.office.com/launch/powerpoint](https://www.office.com/launch/powerpoint)
2. เลือก **Create with Copilot**
3. เลือก **Reference file** แล้วค้นหา `Business Idea.docx` จาก OneDrive

![เลือก Copilot ใน PowerPoint](powerpoint/2026-02-09_14-46-42.png)

3. วาง prompt ด้านล่าง แล้วกด **Send**

```text
สร้าง Presentation ภาษาไทยสำหรับนำเสนอแนวคิดธุรกิจจากไฟล์อ้างอิง
กลุ่มผู้ฟังคือผู้บริหารที่ต้องตัดสินใจว่าจะสนับสนุนโครงการหรือไม่
โครงสร้างต้องมี: ปัญหา โอกาสทางธุรกิจ แนวทางดำเนินงาน ประโยชน์ ความเสี่ยง และขั้นตอนถัดไป
รวมทั้งหมด 6 สไลด์ โดยให้แต่ละสไลด์มีหัวข้อและเนื้อหาที่ชัดเจน
ใช้ข้อความสั้น กระชับ และไม่เพิ่มข้อเท็จจริงที่ไม่มีในไฟล์
```

4. ทำการตอบคำถามเพื่อเจาะจงรายละเอียดงาน ตามที่ Copilot ถาม เช่น จำนวนสไลด์ที่ต้องการ และรูปแบบการนำเสนอ
5. เมื่อ copilot ได้ข้อมูลครบถ้วนแล้ว ให้ตรวจสอบสไลด์ที่สร้างขึ้น และปรับแก้ไขข้อความหรือรูปภาพตามความเหมาะสม


### Practice 2: การสรุปหรือสร้าง slide เพิ่มเติม

1. กลับไปที่ OneDrive และให้คลิกเปิดไฟล์ `Business presentation.pttx` 
2. เมื่อเปิดไฟล์แล้วให้**นำเม้าส์ไปชี้ที่ปุ่ม copilot** ที่อยู่ด้านล่างขวาของหน้าต่าง Microsoft PowerPoint บนเว็บเบราว์เซอร์
3. เลือก prompt ที่ต้องการ เช่น

```text
Summarize this presentation 
```
หรือใช้ prompt ภาษาไทย เช่น

```text
สรุปเนื้อหาสำคัญใน presentation นี้เป็น 5 หัวข้อ
``` 
4. ตรวจสอบผลลัพธ์ที่ได้จาก Copilot และปรับแก้ไขข้อความหรือรูปภาพตามความเหมาะสม


## Checkpoint

- Presentation อ้างอิงข้อมูลจาก `Business Idea.docx`
- มีหัวข้อสำคัญครบตาม prompt และลำดับเรื่องต่อเนื่อง
- ไม่มีตัวเลขหรือข้อเท็จจริงที่ตรวจสอบกับไฟล์ต้นทางไม่ได้

## Expected Output

- Presentation ภาษาไทย 1 ชุดที่พร้อมนำไปตรวจทานต่อ

