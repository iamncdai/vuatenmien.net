const express = require('express')
const app = express()
const port = process.env.PORT || 3004

app.use(express.static('static'))
app.set("view engine", "ejs")

const DOMAINS = [
  "DacSac.com",
  "DuongSach.com",
  "KietTac.com",
  "KimCuongGroup.com",
  "MayTinhViet.com",
  "MetaBox.vn",
  "NangLuongGio.com",
  "QuickSrc.com",
  "San24h.com",
  "SieuUngDung.com",
  "TienDiDong.com",
  "TienPhongGroup.com",
  "Use.com.vn",
  "VieBase.com",
  "VieBus.com",
  "VieCons.com",
  "VieSafe.com",
  "VuaDiDong.com",
  "VuaNhaDat.com",
  "VuongQuoc.net",
  "VuongQuocHoa.com",
  "1Passkeys.com",
];

app.get('/', (req, res) => {
  res.render("index", {
    domains: DOMAINS
  })
})

app.listen(port, () => {
  console.log(`VuaTenMien.net app listening on port ${port}`)
})