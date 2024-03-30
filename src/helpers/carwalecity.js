const carCityData = [{ "id":3000, "cityname":"Mumbai"},
{ "id":40, "cityname":"Thane"},
{ "id":10, "cityname":"Delhi"},
{ "id":2, "cityname":"Bangalore"},
{ "id":176, "cityname":"Chennai"},
{ "id":198, "cityname":"Kolkata"},
{ "id":128, "cityname":"Ahmedabad"},
{ "id":12, "cityname":"Pune"},
{ "id":105, "cityname":"Hyderabad"},
{ "id":10, "cityname":"Delhi"},
{ "id":1, "cityname":"Mumbai City"},
{ "id":105, "cityname":"Hyderabad"},
{ "id":2, "cityname":"Bangalore"},
{ "id":12, "cityname":"Pune"},
{ "id":128, "cityname":"Ahmedabad"},
{ "id":176, "cityname":"Chennai"},
{ "id":246, "cityname":"Gurgaon"},
{ "id":224, "cityname":"Noida"},
{ "id":198, "cityname":"Kolkata"},
{ "id":273, "cityname":"Faridabad"},
{ "id":220, "cityname":"Lucknow"},
{ "id":225, "cityname":"Ghaziabad"},
{ "id":160, "cityname":"Jaipur"},
{ "id":40, "cityname":"Thane"},
{ "id":244, "cityname":"Chandigarh"},
{ "id":31, "cityname":"Nashik"},
{ "id":143, "cityname":"Surat"},
{ "id":210, "cityname":"Patna"},
{ "id":243, "cityname":"Bhubaneswar"},
{ "id":13, "cityname":"Navi Mumbai"},
{ "id":5, "cityname":"Indore"},
{ "id":177, "cityname":"Coimbatore"},
{ "id":117, "cityname":"Visakhapatnam"},
{ "id":4, "cityname":"Bhopal"},
{ "id":145, "cityname":"Vadodara"},
{ "id":262, "cityname":"Dehradun"},
{ "id":237, "cityname":"Kanpur"},
{ "id":221, "cityname":"Agra"},
{ "id":280, "cityname":"Ranchi"},
{ "id":3, "cityname":"Nagpur"},
{ "id":148, "cityname":"Alwar"},
{ "id":234, "cityname":"Ludhiana"},
{ "id":147, "cityname":"Ajmer"},
{ "id":209, "cityname":"Vijaywada"},
{ "id":169, "cityname":"Sikar"},
{ "id":73, "cityname":"Gwalior"},
{ "id":259, "cityname":"Jammu"},
{ "id":260, "cityname":"Srinagar"},
{ "id":17, "cityname":"Aurangabad"},
{ "id":261, "cityname":"Gorakhpur"},
{ "id":141, "cityname":"Rajkot"},
{ "id":394, "cityname":"Secunderabad"},
{ "id":666, "cityname":"Dausa"},
{ "id":250, "cityname":"Varanasi"},
{ "id":222, "cityname":"Allahabad"},
{ "id":172, "cityname":"Sawai Madhopur"},
{ "id":173, "cityname":"Tonk"},
{ "id":1510, "cityname":"Kishangarh"},
{ "id":184, "cityname":"Madurai"},
{ "id":226, "cityname":"Guwahati"},
{ "id":165, "cityname":"Jodhpur"},
{ "id":174, "cityname":"Udaipur"},
{ "id":253, "cityname":"Karnal"},
{ "id":277, "cityname":"Meerut"},
{ "id":233, "cityname":"Jalandhar"},
{ "id":231, "cityname":"Amritsar"},
{ "id":22, "cityname":"Dhule"},
{ "id":264, "cityname":"Rohtak"},
{ "id":421, "cityname":"Howrah"},
{ "id":219, "cityname":"Siliguri"},
{ "id":223, "cityname":"Bareilly"},
{ "id":16, "cityname":"Amravati"},
{ "id":333, "cityname":"Abohar"},
{ "id":808, "cityname":"Sonipat"},
{ "id":249, "cityname":"Panipat"},
{ "id":15, "cityname":"Akola"},
{ "id":125, "cityname":"Raipur"},
{ "id":1526, "cityname":"Greater Noida"},
{ "id":350, "cityname":"Moradabad"},
{ "id":1316, "cityname":"Shirdi"},
{ "id":485, "cityname":"Saharanpur"},
{ "id":7, "cityname":"Jabalpur"},
{ "id":311, "cityname":"Rewari"},
{ "id":166, "cityname":"Kota"},
{ "id":235, "cityname":"Mohali"},
{ "id":309, "cityname":"Hisar"},
{ "id":348, "cityname":"Jhansi"},
{ "id":194, "cityname":"Tiruchirappalli"},
{ "id":347, "cityname":"Tiruppur"},
{ "id":28, "cityname":"Kolhapur"},
{ "id":211, "cityname":"Jamshedpur"},
{ "id":9, "cityname":"Kochi"},
{ "id":1270, "cityname":"Pimpri-Chinchwad"},
{ "id":349, "cityname":"Mathura"},
{ "id":14, "cityname":"Ahmednagar"},
{ "id":191, "cityname":"Salem"},
{ "id":314, "cityname":"Yamunanagar"},
{ "id":195, "cityname":"Tirunelveli"},
{ "id":136, "cityname":"Jamnagar"},
{ "id":483, "cityname":"Purnea"},
{ "id":96, "cityname":"Ujjain"},
{ "id":305, "cityname":"Muzaffurpur"},
{ "id":106, "cityname":"Karimnagar"},
{ "id":263, "cityname":"Roorkee"},
{ "id":85, "cityname":"Ratlam"},
{ "id":389, "cityname":"Azamgarh"},
{ "id":57, "cityname":"Mysore"},
{ "id":135, "cityname":"Gandhi Nagar"},
{ "id":267, "cityname":"Aligarh"},
{ "id":104, "cityname":"Guntur"},
{ "id":1425, "cityname":"Kanpur Nagar"},
{ "id":308, "cityname":"Bhiwani"},
{ "id":340, "cityname":"Erode"},
{ "id":415, "cityname":"Haridwar"},
{ "id":898, "cityname":"Palwal"},
{ "id":270, "cityname":"Kharagpur"},
{ "id":835, "cityname":"Thiruvananthapuram"},
{ "id":36, "cityname":"Sangli"},
{ "id":626, "cityname":"Jaunpur"},
{ "id":437, "cityname":"Bijnor"},
{ "id":207, "cityname":"Hubli"},
{ "id":37, "cityname":"Satara"},
{ "id":589, "cityname":"Morbi"},
{ "id":236, "cityname":"Patiala"},
{ "id":312, "cityname":"Sirsa"},
{ "id":399, "cityname":"Kollam"},
{ "id":109, "cityname":"Mahbubnagar"},
{ "id":274, "cityname":"Faizabad"},
{ "id":164, "cityname":"Jhunjhunu"},
{ "id":131, "cityname":"Bharuch"},
{ "id":363, "cityname":"Anand"},
{ "id":291, "cityname":"Panchkula"},
{ "id":282, "cityname":"Dhanbad"},
{ "id":367, "cityname":"Palanpur"},
{ "id":38, "cityname":"Solapur"},
{ "id":293, "cityname":"Gandhidham"},
{ "id":44, "cityname":"Belgaum"},
{ "id":269, "cityname":"Bhilai"},
{ "id":304, "cityname":"Vellore"},
{ "id":351, "cityname":"Muzaffarnagar"},
{ "id":132, "cityname":"Bhavnagar"},
{ "id":112, "cityname":"Nellore"},
{ "id":26, "cityname":"Jalgaon"},
{ "id":87, "cityname":"Sagar"},
{ "id":151, "cityname":"Bharatpur"},
{ "id":70, "cityname":"Dewas"},
{ "id":86, "cityname":"Rewa"},
{ "id":139, "cityname":"Mehsana"},
{ "id":119, "cityname":"Warangal"},
{ "id":297, "cityname":"Tirupati"},
{ "id":433, "cityname":"Pratapgarh"},
{ "id":88, "cityname":"Satna"},
{ "id":133, "cityname":"Bhuj"},
{ "id":232, "cityname":"Bathinda"},
{ "id":271, "cityname":"Kozhikode"},
{ "id":30, "cityname":"Nanded"},
{ "id":315, "cityname":"Hamirpur"},
{ "id":8, "cityname":"Panvel"},
{ "id":29, "cityname":"Latur"},
{ "id":458, "cityname":"Bulandshahar"},
{ "id":153, "cityname":"Bikaner"},
{ "id":435, "cityname":"Etawah"},
{ "id":71, "cityname":"Dhar"},
{ "id":326, "cityname":"Kannur"},
{ "id":669, "cityname":"Lakhimpur Kheri"},
{ "id":328, "cityname":"Thrissur"},
{ "id":214, "cityname":"Asansol"},
{ "id":76, "cityname":"Khandwa"},
{ "id":1277, "cityname":"Ambala City"},
{ "id":1478, "cityname":"Bihar Sharif"},
{ "id":208, "cityname":"Mangalore"},
{ "id":285, "cityname":"Himmatnagar"},
{ "id":430, "cityname":"Mirzapur"},
{ "id":431, "cityname":"Deoria"},
{ "id":52, "cityname":"Gulbarga"},
{ "id":566, "cityname":"Rae Bareli"},
{ "id":290, "cityname":"Mandi"},
{ "id":295, "cityname":"Vapi"},
{ "id":353, "cityname":"Haldwani"},
{ "id":388, "cityname":"Pollachi"},
{ "id":245, "cityname":"Cuttack"},
{ "id":275, "cityname":"Ambala Cantt"},
{ "id":212, "cityname":"Kottayam"},
{ "id":426, "cityname":"Zirakpur"},
{ "id":47, "cityname":"Bijapur"},
{ "id":152, "cityname":"Bhilwara"},
{ "id":206, "cityname":"Bilaspur"},
{ "id":266, "cityname":"Agartala"},
{ "id":358, "cityname":"Pondicherry"},
{ "id":171, "cityname":"Sriganganagar"},
{ "id":202, "cityname":"Hanumangarh"},
{ "id":287, "cityname":"Rajahumundry"},
{ "id":327, "cityname":"Pathanamthitta"},
{ "id":390, "cityname":"Davangere"},
{ "id":603, "cityname":"Kangra"},
{ "id":310, "cityname":"Kaithal"},
{ "id":593, "cityname":"Auraiya"},
{ "id":137, "cityname":"Junagadh"},
{ "id":320, "cityname":"Bokaro Steel City"},
{ "id":452, "cityname":"Darbhanga"},
{ "id":469, "cityname":"Firozabad"},
{ "id":636, "cityname":"Motihari"},
{ "id":72, "cityname":"Guna"},
{ "id":144, "cityname":"Surendranagar"},
{ "id":281, "cityname":"Pathankot"},
{ "id":352, "cityname":"Shahjahanpur"},
{ "id":604, "cityname":"Hardoi"},
{ "id":11, "cityname":"Kurnool"},
{ "id":256, "cityname":"Goa"},
{ "id":1102, "cityname":"Farrukhabad"},
{ "id":193, "cityname":"Thanjavur"},
{ "id":288, "cityname":"Kurukshetra"},
{ "id":660, "cityname":"Aurangabad"},
{ "id":167, "cityname":"Nagaur"},
{ "id":252, "cityname":"Kakinada"},
{ "id":583, "cityname":"Phagwara"},
{ "id":6, "cityname":"Kalyan"},
{ "id":705, "cityname":"Jind"},
{ "id":707, "cityname":"Jhajjar"},
{ "id":783, "cityname":"Gonda"},
{ "id":316, "cityname":"Shimla"},
{ "id":354, "cityname":"Rudrapur"},
{ "id":467, "cityname":"Begusarai"},
{ "id":602, "cityname":"Nandurbar"},
{ "id":67, "cityname":"Chhindwara"},
{ "id":749, "cityname":"Pratapgarh"},
{ "id":156, "cityname":"Churu"},
{ "id":329, "cityname":"Imphal"},
{ "id":59, "cityname":"Shimoga"},
{ "id":788, "cityname":"Ghazipur"},
{ "id":100, "cityname":"Anantapur"},
{ "id":1042, "cityname":"Bettiah"},
{ "id":1044, "cityname":"Anantnag"},
{ "id":168, "cityname":"Pali"},
{ "id":200, "cityname":"Ernakulam"},
{ "id":578, "cityname":"Bahadurgarh"},
{ "id":116, "cityname":"Srikakulam"},
{ "id":1266, "cityname":"Sahibabad"},
{ "id":1572, "cityname":"Hajipur"},
{ "id":181, "cityname":"Dindigul"},
{ "id":319, "cityname":"Hazaribagh"},
{ "id":342, "cityname":"Nagercoil"},
{ "id":397, "cityname":"Durgapur"},
{ "id":847, "cityname":"Khairtabad"},
{ "id":27, "cityname":"Jalna"},
{ "id":365, "cityname":"Maninagar"},
{ "id":638, "cityname":"Siwan"},
{ "id":949, "cityname":"Sitapur"},
{ "id":996, "cityname":"Sasaram"},
{ "id":1091, "cityname":"Fatehpur"},
{ "id":240, "cityname":"Silchar"},
{ "id":331, "cityname":"Angul"},
{ "id":336, "cityname":"Moga"},
{ "id":408, "cityname":"Godhra"},
{ "id":436, "cityname":"Basti"},
{ "id":455, "cityname":"Narnaul"},
{ "id":691, "cityname":"Kadapa"},
{ "id":1019, "cityname":"Malegaon"},
{ "id":265, "cityname":"Rourkela"},
{ "id":302, "cityname":"Bhagalpur"},
{ "id":322, "cityname":"Udupi"},
{ "id":413, "cityname":"Yavatmal"},
{ "id":534, "cityname":"Hosur"},
{ "id":535, "cityname":"Gaya"},
{ "id":53, "cityname":"Hassan"},
{ "id":584, "cityname":"Deoghar"},
{ "id":66, "cityname":"Chhatarpur"},
{ "id":91, "cityname":"Shahdol"},
{ "id":97, "cityname":"Vidisha"},
{ "id":1058, "cityname":"Samastipur"},
{ "id":20, "cityname":"Buldhana"},
{ "id":215, "cityname":"Malda"},
{ "id":366, "cityname":"Navsari"},
{ "id":368, "cityname":"Patan"},
{ "id":432, "cityname":"Ballia"},
{ "id":1462, "cityname":"Bhiwadi"},
{ "id":162, "cityname":"Jalore"},
{ "id":33, "cityname":"Parbhani"},
{ "id":577, "cityname":"Rampur"},
{ "id":1267, "cityname":"Ulhasnagar"},
{ "id":189, "cityname":"Pudukkottai"},
{ "id":238, "cityname":"Dibrugarh"},
{ "id":377, "cityname":"Thiruvalla"},
{ "id":395, "cityname":"Vasai"},
{ "id":428, "cityname":"Ramanathapuram"},
{ "id":454, "cityname":"Ankleshwar"},
{ "id":478, "cityname":"Nadiad"},
{ "id":60, "cityname":"Tumkur"},
{ "id":656, "cityname":"Sultanpur"},
{ "id":1204, "cityname":"Saharsa"},
{ "id":45, "cityname":"Bellary"},
{ "id":505, "cityname":"Ongole"},
{ "id":80, "cityname":"Morena"},
{ "id":1263, "cityname":"Trimulgherry"},
{ "id":272, "cityname":"Jorhat"},
{ "id":303, "cityname":"Bodh Gaya"},
{ "id":46, "cityname":"Bidar"},
{ "id":592, "cityname":"Fatehabad"},
{ "id":635, "cityname":"Ara"},
{ "id":786, "cityname":"Mau"},
{ "id":113, "cityname":"Nizamabad"},
{ "id":115, "cityname":"Ranga Reddy"},
{ "id":1378, "cityname":"Ganganagar"},
{ "id":563, "cityname":"Kasaragod"},
{ "id":615, "cityname":"Nagaon"},
{ "id":396, "cityname":"Balasore"},
{ "id":456, "cityname":"Rishikesh"},
{ "id":782, "cityname":"Kannauj"},
{ "id":945, "cityname":"Etah"},
{ "id":107, "cityname":"Khammam"},
{ "id":1211, "cityname":"Barabanki"},
{ "id":1249, "cityname":"Bahraich"},
{ "id":1331, "cityname":"Vizianagaram"},
{ "id":24, "cityname":"Gopalganj"},
{ "id":318, "cityname":"Udhampur"},
{ "id":89, "cityname":"Sehore"},
{ "id":111, "cityname":"Nalgonda"},
{ "id":1159, "cityname":"Una"},
{ "id":129, "cityname":"Amreli"},
{ "id":1467, "cityname":"Modasa"},
{ "id":201, "cityname":"Shillong"},
{ "id":258, "cityname":"Sambalpur"},
{ "id":268, "cityname":"Sangrur"},
{ "id":334, "cityname":"Hoshiarpur"},
{ "id":35, "cityname":"Ratnagiri"},
{ "id":375, "cityname":"Palakkad"},
{ "id":621, "cityname":"Theni"},
{ "id":634, "cityname":"Ambikapur"},
{ "id":655, "cityname":"Sangamner"},
{ "id":946, "cityname":"Mainpuri"},
{ "id":1029, "cityname":"Dombivali"},
{ "id":1359, "cityname":"Mewat"},
{ "id":1419, "cityname":"Pilibhit"},
{ "id":1573, "cityname":"Hamirpur"},
{ "id":255, "cityname":"Hospet"},
{ "id":294, "cityname":"Porbandar"},
{ "id":332, "cityname":"Berhampur"},
{ "id":561, "cityname":"Kashipur"},
{ "id":606, "cityname":"Hapur"},
{ "id":737, "cityname":"Pen"},
{ "id":787, "cityname":"Unnao"},
{ "id":960, "cityname":"Jajpur"},
{ "id":1205, "cityname":"Sitamarhi"},
{ "id":155, "cityname":"Chittorgarh"},
{ "id":279, "cityname":"Firozpur"},
{ "id":386, "cityname":"Karur"},
{ "id":443, "cityname":"Palampur"},
{ "id":585, "cityname":"Khanna"},
{ "id":64, "cityname":"Bhind"},
{ "id":1213, "cityname":"Shamli"},
{ "id":1489, "cityname":"Silvassa"},
{ "id":18, "cityname":"Beed"},
{ "id":19, "cityname":"Bhandara"},
{ "id":425, "cityname":"Gurdaspur"},
{ "id":643, "cityname":"Baramati"},
{ "id":999, "cityname":"Singrauli"},
{ "id":1403, "cityname":"Madhubani"},
{ "id":146, "cityname":"Valsad"},
{ "id":1574, "cityname":"Orai"},
{ "id":227, "cityname":"Tinsukia"},
{ "id":1054, "cityname":"Manesar"},
{ "id":123, "cityname":"Giridih"},
{ "id":1535, "cityname":"Thoothukudi"},
{ "id":403, "cityname":"Una"},
{ "id":41, "cityname":"Wardha"},
{ "id":48, "cityname":"Chikamagalur"},
{ "id":601, "cityname":"Bardoli"},
{ "id":84, "cityname":"Raisen"},
{ "id":1208, "cityname":"Banda"},
{ "id":51, "cityname":"Dharwad"},
{ "id":58, "cityname":"Raichur"},
{ "id":610, "cityname":"Daltonganj"},
{ "id":614, "cityname":"Hathras"},
{ "id":627, "cityname":"Kasganj"},
{ "id":640, "cityname":"North Lakhimpur"},
{ "id":746, "cityname":"Jagraon"},
{ "id":78, "cityname":"Mandasur"},
{ "id":1577, "cityname":"Veraval"},
{ "id":337, "cityname":"Muktsar"},
{ "id":42, "cityname":"Washim"},
{ "id":446, "cityname":"Katni"},
{ "id":49, "cityname":"Chitradurga"},
{ "id":62, "cityname":"Balaghat"},
{ "id":637, "cityname":"Nawada"},
{ "id":1043, "cityname":"Kharar"},
{ "id":1085, "cityname":"Baghpat"},
{ "id":1210, "cityname":"Kushinagar"},
{ "id":124, "cityname":"Raigarh"},
{ "id":1458, "cityname":"Budaun"},
{ "id":150, "cityname":"Barmer"},
{ "id":300, "cityname":"Tezpur"},
{ "id":409, "cityname":"Bagalkot"},
{ "id":410, "cityname":"Alappuzha"},
{ "id":546, "cityname":"Mancheral"},
{ "id":815, "cityname":"Amalapuram"},
{ "id":842, "cityname":"Deesa"},
{ "id":93, "cityname":"Shivpuri"},
{ "id":1165, "cityname":"Botad"},
{ "id":122, "cityname":"Durg"},
{ "id":149, "cityname":"Banswara"},
{ "id":306, "cityname":"Korba"},
{ "id":442, "cityname":"Sonbhadra"},
{ "id":473, "cityname":"Karad"},
{ "id":475, "cityname":"Chhapra"},
{ "id":56, "cityname":"Mandya"},
{ "id":570, "cityname":"Bongaigaon"},
{ "id":704, "cityname":"Charkhi Dadri"},
{ "id":1028, "cityname":"Supaul"},
{ "id":126, "cityname":"Rajnandgaon"},
{ "id":1377, "cityname":"Udham Singh Nagar"},
{ "id":1381, "cityname":"North Goa"},
{ "id":1424, "cityname":"Kanpur Dehat"},
{ "id":1554, "cityname":"Araria"},
{ "id":343, "cityname":"Namakkal"},
{ "id":355, "cityname":"Burdwan"},
{ "id":468, "cityname":"Dahod"},
{ "id":472, "cityname":"Kapurthala"},
{ "id":490, "cityname":"Adoni"},
{ "id":50, "cityname":"Dak. Kannada"},
{ "id":575, "cityname":"Faridkot"},
{ "id":617, "cityname":"Rajsamand"},
{ "id":63, "cityname":"Betul"},
{ "id":774, "cityname":"Neemuch"},
{ "id":103, "cityname":"East Godavari"},
{ "id":1395, "cityname":"Kupwara"},
{ "id":1513, "cityname":"Sohna"},
{ "id":1515, "cityname":"Mandi Dabwali"},
{ "id":1523, "cityname":"Karaikudi"},
{ "id":1536, "cityname":"Begun"},
{ "id":21, "cityname":"Chandrapur"},
{ "id":32, "cityname":"Osmanabad"},
{ "id":360, "cityname":"Cuddalore"},
{ "id":419, "cityname":"Jharsuguda"},
{ "id":541, "cityname":"Nirmal"},
{ "id":580, "cityname":"Tiruvannamalai"},
{ "id":722, "cityname":"Gadchiroli"},
{ "id":750, "cityname":"Krishnagiri"},
{ "id":764, "cityname":"Tarn Taran"},
{ "id":1021, "cityname":"Baran"},
{ "id":1215, "cityname":"Devbhumi Dwarka"},
{ "id":1387, "cityname":"Buxar"},
{ "id":1420, "cityname":"Mahoba"},
{ "id":1528, "cityname":"Kumbakonam"},
{ "id":1552, "cityname":"Kalol"},
{ "id":158, "cityname":"Dungarpur"},
{ "id":313, "cityname":"Sonepat"},
{ "id":382, "cityname":"Batala"},
{ "id":427, "cityname":"Karaikal"},
{ "id":528, "cityname":"Bhimavaram"},
{ "id":679, "cityname":"Karimganj"},
{ "id":689, "cityname":"Madanapalle"},
{ "id":708, "cityname":"Gohana"},
{ "id":744, "cityname":"Mansa"},
{ "id":763, "cityname":"Kathua"},
{ "id":790, "cityname":"Balrampur"},
{ "id":1027, "cityname":"Katihar"},
{ "id":1059, "cityname":"Singar Nagar"},
{ "id":1483, "cityname":"Amethi"},
{ "id":1495, "cityname":"Bhiwandi"},
{ "id":163, "cityname":"Jhalawar"},
{ "id":180, "cityname":"Dharmapuri"},
{ "id":25, "cityname":"Hingoli"},
{ "id":439, "cityname":"Hooghly"},
{ "id":461, "cityname":"Cooch Behar"},
{ "id":55, "cityname":"Kolar"},
{ "id":569, "cityname":"Malappuram"},
{ "id":622, "cityname":"Rajpura"},
{ "id":754, "cityname":"Ambattur"},
{ "id":819, "cityname":"Baramulla"},
{ "id":90, "cityname":"Seoni"},
{ "id":94, "cityname":"Sidhi"},
{ "id":101, "cityname":"Chittoor"},
{ "id":1229, "cityname":"Nagapattinam"},
{ "id":1252, "cityname":"Ambedkarnagar"},
{ "id":1281, "cityname":"Badlapur"},
{ "id":1355, "cityname":"Dakshineswar"},
{ "id":1417, "cityname":"Siddharthnagar"},
{ "id":1421, "cityname":"Lalitpur"},
{ "id":1585, "cityname":"Visnagar"},
{ "id":298, "cityname":"Itanagar"},
{ "id":470, "cityname":"Gadag"},
{ "id":695, "cityname":"Mahabubabad"},
{ "id":74, "cityname":"Hoshangabad"},
{ "id":755, "cityname":"Chengalpattu"},
{ "id":785, "cityname":"Bhadohi"},
{ "id":791, "cityname":"Mahrajganj"},
{ "id":828, "cityname":"Saran"},
{ "id":952, "cityname":"Baripada"},
{ "id":983, "cityname":"Amroha"},
{ "id":1000, "cityname":"Harda"},
{ "id":1052, "cityname":"Virar"},
{ "id":1061, "cityname":"Ballabgarh"},
{ "id":1175, "cityname":"Siddipet"},
{ "id":1214, "cityname":"Madhepura"},
{ "id":1219, "cityname":"Bilaspur"},
{ "id":1268, "cityname":"Phaltan"},
{ "id":1379, "cityname":"Karauli"},
{ "id":1390, "cityname":"Mahendragarh"},
{ "id":1476, "cityname":"Udaipur-Tripura"},
{ "id":1529, "cityname":"Robertsganj"},
{ "id":339, "cityname":"Gangtok"},
{ "id":398, "cityname":"Dumka"},
{ "id":520, "cityname":"Kottagudem"},
{ "id":654, "cityname":"Balotra"},
{ "id":706, "cityname":"Narwana"},
{ "id":833, "cityname":"Tenkasi"},
{ "id":841, "cityname":"Alipurduar"},
{ "id":907, "cityname":"Dhemaji"},
{ "id":926, "cityname":"Hojai"},
{ "id":948, "cityname":"Daman"},
{ "id":110, "cityname":"Medak"},
{ "id":1484, "cityname":"Halol"},
{ "id":346, "cityname":"Sivakasi"},
{ "id":420, "cityname":"Keonjhar"},
{ "id":471, "cityname":"Gangapur"},
{ "id":500, "cityname":"Proddatur"},
{ "id":576, "cityname":"Neyveli"},
{ "id":594, "cityname":"Tuticorin"},
{ "id":674, "cityname":"Bankura"},
{ "id":680, "cityname":"Bhadrak"},
{ "id":692, "cityname":"Miryalaguda"},
{ "id":739, "cityname":"Alandi"},
{ "id":757, "cityname":"Rajouri"},
{ "id":77, "cityname":"Khargone"},
{ "id":880, "cityname":"Jharia Khas"},
{ "id":1022, "cityname":"Godda"},
{ "id":108, "cityname":"Krishna"},
{ "id":1160, "cityname":"Keshod"},
{ "id":1274, "cityname":"Rampur"},
{ "id":1382, "cityname":"South Goa"},
{ "id":1391, "cityname":"Garhwa"},
{ "id":1459, "cityname":"Beawar"},
{ "id":1600, "cityname":"Waidhan"},
{ "id":161, "cityname":"Jaisalmer"},
{ "id":199, "cityname":"Boisar"},
{ "id":218, "cityname":"Jagdalpur"},
{ "id":23, "cityname":"Gondia"},
{ "id":242, "cityname":"Bargarh"},
{ "id":387, "cityname":"Ooty"},
{ "id":402, "cityname":"Darjeeling"},
{ "id":462, "cityname":"Haldia"},
{ "id":492, "cityname":"Anakapalle"},
{ "id":579, "cityname":"Thiruvarur"},
{ "id":687, "cityname":"Bilaspur"},
{ "id":759, "cityname":"Doda"},
{ "id":796, "cityname":"Pallikarnai"},
{ "id":986, "cityname":"Gajraulla"},
{ "id":1178, "cityname":"Sonarpur"},
{ "id":1182, "cityname":"Bavla"},
{ "id":1228, "cityname":"Fazilka"},
{ "id":1261, "cityname":"Palghar"},
{ "id":1422, "cityname":"Gautam Buddha Nagar"},
{ "id":1500, "cityname":"Sagara"},
{ "id":1575, "cityname":"Kishanganj"},
{ "id":157, "cityname":"Dholpur"},
{ "id":1584, "cityname":"Gondal"},
{ "id":296, "cityname":"Port Blair"},
{ "id":376, "cityname":"Thalassery"},
{ "id":429, "cityname":"Villupuram"},
{ "id":567, "cityname":"Sunam"},
{ "id":600, "cityname":"Krishnanagar"},
{ "id":608, "cityname":"Kullu"},
{ "id":667, "cityname":"Danapur"},
{ "id":686, "cityname":"Derra Bassi"},
{ "id":694, "cityname":"Wanaparthy"},
{ "id":713, "cityname":"Yadagir"},
{ "id":714, "cityname":"Haveri"},
{ "id":758, "cityname":"Poonch"},
{ "id":803, "cityname":"Udumalpet"},
{ "id":809, "cityname":"Hansi"},
{ "id":839, "cityname":"Raiganj"},
{ "id":858, "cityname":"Padrauna"},
{ "id":935, "cityname":"North Guwahati"},
{ "id":944, "cityname":"Balangir"},
{ "id":947, "cityname":"Modi Nagar"},
{ "id":1024, "cityname":"Jamui"},
{ "id":1051, "cityname":"Pulwama"},
{ "id":1173, "cityname":"Sanga Reddy"},
{ "id":1174, "cityname":"Vikarabad"},
{ "id":1194, "cityname":"Baddi"},
{ "id":1212, "cityname":"Chitrakoot"},
{ "id":1305, "cityname":"Malout"},
{ "id":1318, "cityname":"Biaora"},
{ "id":1327, "cityname":"Kundrathur"},
{ "id":1408, "cityname":"East Sikkim"},
{ "id":1415, "cityname":"West Tripura"},
{ "id":1423, "cityname":"Jalaun"},
{ "id":1466, "cityname":"Sivasagar"},
{ "id":1468, "cityname":"Kuchaman"},
{ "id":1576, "cityname":"Anjar"},
{ "id":1580, "cityname":"Mayiladuthurai"},
{ "id":1581, "cityname":"Dharapuram"},
{ "id":170, "cityname":"Sirohi"},
{ "id":299, "cityname":"Golaghat"},
{ "id":330, "cityname":"Dimapur"},
{ "id":440, "cityname":"Murshidabad"},
{ "id":549, "cityname":"Solan"},
{ "id":552, "cityname":"Puri"},
{ "id":573, "cityname":"Maler Kotla"},
{ "id":581, "cityname":"Shikohabad"},
{ "id":620, "cityname":"Kalpetta"},
{ "id":623, "cityname":"Barnala"},
{ "id":639, "cityname":"Rupnagar"},
{ "id":662, "cityname":"Sharanpur"},
{ "id":792, "cityname":"Akbarpur"},
{ "id":79, "cityname":"Mandla"},
{ "id":826, "cityname":"Ashok Nagar"},
{ "id":834, "cityname":"Marthandam"},
{ "id":924, "cityname":"Hailakandi"},
{ "id":1005, "cityname":"Barshi"},
{ "id":1065, "cityname":"Baharampur"},
{ "id":1220, "cityname":"Kulgam"},
{ "id":1301, "cityname":"Jalalabad"},
{ "id":1325, "cityname":"Maadhavaram"},
{ "id":138, "cityname":"Kheda"},
{ "id":1400, "cityname":"Kaimur"},
{ "id":1401, "cityname":"Khagaria"},
{ "id":1413, "cityname":"North Tripura"},
{ "id":142, "cityname":"Sabarkantha"},
{ "id":1453, "cityname":"Dadra &amp; Nagar Haveli"},
{ "id":1519, "cityname":"Sirsi"},
{ "id":1568, "cityname":"Pataudi"},
{ "id":34, "cityname":"Raigad"},
{ "id":378, "cityname":"Tirur"},
{ "id":474, "cityname":"Kancheepuram"},
{ "id":477, "cityname":"Kovilpatti"},
{ "id":479, "cityname":"Kotdwar"},
{ "id":518, "cityname":"Suriapet"},
{ "id":544, "cityname":"Jagtial"},
{ "id":571, "cityname":"Chamba"},
{ "id":574, "cityname":"Mhow"},
{ "id":642, "cityname":"Perinthalmanna"},
{ "id":696, "cityname":"Jangaon"},
{ "id":69, "cityname":"Datia"},
{ "id":719, "cityname":"Gokak"},
{ "id":733, "cityname":"Chiplun"},
{ "id":762, "cityname":"Samba"},
{ "id":806, "cityname":"Pehwa"},
{ "id":829, "cityname":"Mahwa"},
{ "id":853, "cityname":"Hoskote"},
{ "id":854, "cityname":"Madikeri"},
{ "id":899, "cityname":"Leh"},
{ "id":903, "cityname":"Barpeta"},
{ "id":908, "cityname":"Dhubri"},
{ "id":95, "cityname":"Tikamgarh"},
{ "id":984, "cityname":"Chandausi"},
{ "id":985, "cityname":"Sambhal"},
{ "id":99, "cityname":"Adilabad"},
{ "id":1012, "cityname":"Akluj"},
{ "id":1026, "cityname":"Kanker"},
{ "id":1041, "cityname":"Sanand"},
{ "id":1057, "cityname":"Samana"},
{ "id":1099, "cityname":"Paradeep"},
{ "id":1206, "cityname":"Munger"},
{ "id":1209, "cityname":"Sant Kabir Nagar"},
{ "id":1239, "cityname":"Kudal"},
{ "id":1251, "cityname":"Khalilabad"},
{ "id":1256, "cityname":"Kalyani"},
{ "id":130, "cityname":"Banaskantha"},
{ "id":1342, "cityname":"Parshivni"},
{ "id":1397, "cityname":"Barwani"},
{ "id":1516, "cityname":"Indapur"},
{ "id":1556, "cityname":"Kundapura"},
{ "id":1578, "cityname":"Attur"},
{ "id":1589, "cityname":"Tirupathur"},
{ "id":251, "cityname":"Khopoli"},
{ "id":335, "cityname":"Mandi Gobindgarh"},
{ "id":338, "cityname":"Nawanshahr"},
{ "id":361, "cityname":"Alibag"},
{ "id":362, "cityname":"Sibsagar"},
{ "id":484, "cityname":"Ramgarh"},
{ "id":515, "cityname":"Eluru"},
{ "id":556, "cityname":"Ichalkaranji"},
{ "id":612, "cityname":"Sirhind"},
{ "id":675, "cityname":"Tamluk"},
{ "id":681, "cityname":"Dhenkanal"},
{ "id":710, "cityname":"Koppal"},
{ "id":723, "cityname":"Ambajogai"},
{ "id":727, "cityname":"Shahapur"},
{ "id":773, "cityname":"Sanchore"},
{ "id":784, "cityname":"Badaun"},
{ "id":800, "cityname":"Sivangangai"},
{ "id":824, "cityname":"Jangareddygudem"},
{ "id":840, "cityname":"Jalpaiguri"},
{ "id":849, "cityname":"Koraput"},
{ "id":885, "cityname":"Kodarma"},
{ "id":923, "cityname":"Goalpara"},
{ "id":931, "cityname":"Mangaldai"},
{ "id":1047, "cityname":"Mukerian"},
{ "id":1078, "cityname":"Rajula"},
{ "id":1092, "cityname":"Mughalsarai"},
{ "id":1172, "cityname":"Zaheerabad"},
{ "id":1222, "cityname":"Agar Malwa"},
{ "id":1234, "cityname":"Pithoragarh"},
{ "id":1238, "cityname":"Machhiwara"},
{ "id":1255, "cityname":"Barackpore"},
{ "id":1308, "cityname":"Burhanpur"},
{ "id":1314, "cityname":"Shrirampur"},
{ "id":1319, "cityname":"Avadi"},
{ "id":1348, "cityname":"Thodupuzha"},
{ "id":1385, "cityname":"Banka"},
{ "id":1496, "cityname":"Chikhli"},
{ "id":1497, "cityname":"Contai"},
{ "id":1522, "cityname":"Vadakara"},
{ "id":1530, "cityname":"Changanassery"},
{ "id":1538, "cityname":"Ramganj mandi"},
{ "id":1549, "cityname":"Behror"},
{ "id":1567, "cityname":"Aroor"},
{ "id":1596, "cityname":"Paschim Medinipur"},
{ "id":1601, "cityname":"Mahad"},
{ "id":1611, "cityname":"Didwana"},
{ "id":183, "cityname":"Kanyakumari"},
{ "id":373, "cityname":"Kanhangad"},
{ "id":531, "cityname":"Chirala"},
{ "id":536, "cityname":"Tuni"},
{ "id":557, "cityname":"Bhusawal"},
{ "id":598, "cityname":"Dhamtari"},
{ "id":599, "cityname":"Dharamsala"},
{ "id":677, "cityname":"Balurghat"},
{ "id":68, "cityname":"Damoh"},
{ "id":712, "cityname":"Ranebennur"},
{ "id":753, "cityname":"Velachery"},
{ "id":766, "cityname":"Rayya"},
{ "id":789, "cityname":"Chandauli"},
{ "id":799, "cityname":"Tindivanam"},
{ "id":827, "cityname":"Mohania"},
{ "id":82, "cityname":"Panna"},
{ "id":830, "cityname":"Kotputli"},
{ "id":838, "cityname":"Behrampur"},
{ "id":92, "cityname":"Shajapur"},
{ "id":961, "cityname":"Jajpur Road"},
{ "id":1007, "cityname":"Pandharpur"},
{ "id":1009, "cityname":"Sangola"},
{ "id":1040, "cityname":"Kargil"},
{ "id":1053, "cityname":"Thiruvallur"},
{ "id":1089, "cityname":"Bemetra"},
{ "id":1109, "cityname":"Margao"},
{ "id":1127, "cityname":"Mahisagar"},
{ "id":1130, "cityname":"Janjgir-Champa"},
{ "id":1141, "cityname":"Dindori - MH"},
{ "id":1143, "cityname":"Maihar"},
{ "id":1145, "cityname":"Balasinor"},
{ "id":1177, "cityname":"Shadnagar"},
{ "id":1188, "cityname":"Viramgam"},
{ "id":1207, "cityname":"Rohtas"},
{ "id":1236, "cityname":"Uttarkashi"},
{ "id":1311, "cityname":"Kotkapura"},
{ "id":1320, "cityname":"Poonamallee"},
{ "id":1321, "cityname":"Gummudipoondi"},
{ "id":1353, "cityname":"Arambagh"},
{ "id":1392, "cityname":"Sahibganj"},
{ "id":1396, "cityname":"Reasi"},
{ "id":1406, "cityname":"Sheohar"},
{ "id":1410, "cityname":"South Sikkim"},
{ "id":1426, "cityname":"Kaushambi"},
{ "id":1479, "cityname":"Bishwanath Charali"},
{ "id":1492, "cityname":"Karjat"},
{ "id":1493, "cityname":"Barwala"},
{ "id":1506, "cityname":"Nedumangad"},
{ "id":1511, "cityname":"Badami"},
{ "id":1517, "cityname":"Saswad"},
{ "id":1555, "cityname":"Puttur"},
{ "id":1621, "cityname":"Anekal"},
{ "id":228, "cityname":"Panaji"},
{ "id":392, "cityname":"Idukki"},
{ "id":406, "cityname":"Renukut"},
{ "id":422, "cityname":"Lonavla"},
{ "id":423, "cityname":"Virudhunagar"},
{ "id":444, "cityname":"Babrala"},
{ "id":447, "cityname":"Anuppur"},
{ "id":496, "cityname":"Nandyal"},
{ "id":507, "cityname":"Chilakalurupet"},
{ "id":508, "cityname":"Narasaropet"},
{ "id":510, "cityname":"Mangalagiri"},
{ "id":526, "cityname":"Tadepallegudem"},
{ "id":540, "cityname":"Sangareddi"},
{ "id":565, "cityname":"Neyyattinkara"},
{ "id":588, "cityname":"Kattapana"},
{ "id":631, "cityname":"Mahuva"},
{ "id":688, "cityname":"Joginder Nagar"},
{ "id":711, "cityname":"Gangavathi"},
{ "id":716, "cityname":"Chikodi"},
{ "id":738, "cityname":"Dahanu"},
{ "id":745, "cityname":"Nabha"},
{ "id":761, "cityname":"Ramban"},
{ "id":768, "cityname":"Paonta Sahib"},
{ "id":771, "cityname":"Perambalur"},
{ "id":780, "cityname":"Nakodar"},
{ "id":798, "cityname":"Kallakuruchi"},
{ "id":812, "cityname":"Vinukonda"},
{ "id":81, "cityname":"Narasinghpur"},
{ "id":823, "cityname":"Tanuku"},
{ "id":879, "cityname":"Jamtara"},
{ "id":896, "cityname":"Ramgarh Cantt"},
{ "id":963, "cityname":"Joda"},
{ "id":1001, "cityname":"Umaria"},
{ "id":1056, "cityname":"Dhuri"},
{ "id":1067, "cityname":"Wayanad"},
{ "id":1087, "cityname":"Purulia"},
{ "id":1098, "cityname":"Payyanur"},
{ "id":1120, "cityname":"Porvorim"},
{ "id":1144, "cityname":"Shopian"},
{ "id":1152, "cityname":"Talala"},
{ "id":1185, "cityname":"Limdi"},
{ "id":1191, "cityname":"Halvad"},
{ "id":1218, "cityname":"Tapi"},
{ "id":1227, "cityname":"Fatehgarh Sahib"},
{ "id":1254, "cityname":"Madhyamgram"},
{ "id":1259, "cityname":"Ranaghat"},
{ "id":1278, "cityname":"Itarsi"},
{ "id":1339, "cityname":"Tumsar"},
{ "id":1344, "cityname":"Pusad"},
{ "id":1358, "cityname":"Dharamsala"},
{ "id":1362, "cityname":"Arwal"},
{ "id":1375, "cityname":"Chamoli"},
{ "id":1380, "cityname":"Nuapada"},
{ "id":1386, "cityname":"Bhojpur"},
{ "id":1399, "cityname":"Jehanabad"},
{ "id":1405, "cityname":"Sheikhpura"},
{ "id":1463, "cityname":"Kanjirapally"},
{ "id":1465, "cityname":"Merta"},
{ "id":1480, "cityname":"Kadur"},
{ "id":1488, "cityname":"Daund"},
{ "id":1494, "cityname":"Khambhalia"},
{ "id":1508, "cityname":"Nilambur"},
{ "id":1533, "cityname":"Palani"},
{ "id":1534, "cityname":"Oddanchatram"},
{ "id":154, "cityname":"Bundi"},
{ "id":1560, "cityname":"Vengara"},
{ "id":1562, "cityname":"Panoor"},
{ "id":1569, "cityname":"Bolpur"},
{ "id":1597, "cityname":"Dakshin Dinajpur"},
{ "id":1598, "cityname":"Peddapalli"},
{ "id":357, "cityname":"Pattambi"},
{ "id":374, "cityname":"Kottarakara"},
{ "id":380, "cityname":"Tehri Garhwal"},
{ "id":450, "cityname":"Nadia"},
{ "id":482, "cityname":"Perumbavoor"},
{ "id":489, "cityname":"Tadpatri"},
{ "id":494, "cityname":"Guntakal"},
{ "id":512, "cityname":"Machilipatnam"},
{ "id":517, "cityname":"Kodar"},
{ "id":533, "cityname":"Cumbum"},
{ "id":537, "cityname":"Hindupur"},
{ "id":538, "cityname":"Gadwal"},
{ "id":607, "cityname":"Kapadwanj"},
{ "id":611, "cityname":"Bazpur"},
{ "id":618, "cityname":"Bhawanipatna"},
{ "id":649, "cityname":"Almora"},
{ "id":684, "cityname":"Anandpur Sahib"},
{ "id":699, "cityname":"Jashpur"},
{ "id":720, "cityname":"Athini"},
{ "id":729, "cityname":"Shahada"},
{ "id":731, "cityname":"Sinner"},
{ "id":740, "cityname":"Shirur"},
{ "id":760, "cityname":"Kishtwar"},
{ "id":781, "cityname":"Karunagappally"},
{ "id":794, "cityname":"Baghpat"},
{ "id":816, "cityname":"Ravulapalem"},
{ "id":856, "cityname":"Kutch"},
{ "id":891, "cityname":"Lohardaga"},
{ "id":932, "cityname":"Margherita"},
{ "id":934, "cityname":"Nalbari"},
{ "id":959, "cityname":"Jagatsinghpur"},
{ "id":966, "cityname":"Kendrapada"},
{ "id":978, "cityname":"Rayagada"},
{ "id":991, "cityname":"Chandpur"},
{ "id":1023, "cityname":"Pakur"},
{ "id":1063, "cityname":"Ashta"},
{ "id":1064, "cityname":"Birbhum"},
{ "id":1073, "cityname":"Khambha"},
{ "id":1084, "cityname":"Waranakadoli"},
{ "id":1090, "cityname":"Kawardha"},
{ "id":1095, "cityname":"Gadarwara"},
{ "id":1106, "cityname":"Chalisgaon"},
{ "id":1122, "cityname":"Dindori"},
{ "id":1123, "cityname":"Habra"},
{ "id":1124, "cityname":"Chirimiri"},
{ "id":1126, "cityname":"Bina"},
{ "id":1129, "cityname":"Surajpur"},
{ "id":1131, "cityname":"Pathalgaon"},
{ "id":1136, "cityname":"Mahasamund"},
{ "id":1138, "cityname":"Saraipali"},
{ "id":1146, "cityname":"Chota Udaipur"},
{ "id":1169, "cityname":"Gadhada"},
{ "id":1176, "cityname":"Jadcherla"},
{ "id":1181, "cityname":"Dholka"},
{ "id":1183, "cityname":"Dhandhuka"},
{ "id":1190, "cityname":"Dhrangadhra"},
{ "id":1203, "cityname":"Kokrajhar"},
{ "id":1217, "cityname":"Narmada"},
{ "id":1221, "cityname":"Chikkaballapur"},
{ "id":1230, "cityname":"Ariyalur"},
{ "id":1231, "cityname":"North 24 Parganas"},
{ "id":1242, "cityname":"Lanja"},
{ "id":1247, "cityname":"Sawantwadi"},
{ "id":1253, "cityname":"Basirhat"},
{ "id":1310, "cityname":"Angamaly"},
{ "id":1312, "cityname":"Guruharsahai"},
{ "id":1313, "cityname":"Bagha Purana"},
{ "id":1323, "cityname":"Minjur"},
{ "id":1324, "cityname":"Redhills"},
{ "id":1335, "cityname":"Pulgaon"},
{ "id":1393, "cityname":"Seraikela-kharsawan"},
{ "id":1398, "cityname":"Sheopur"},
{ "id":1402, "cityname":"Lakhisarai"},
{ "id":1404, "cityname":"Nalanda"},
{ "id":1407, "cityname":"Vaishali"},
{ "id":1427, "cityname":"Bijapu"},
{ "id":1428, "cityname":"Dantewada"},
{ "id":1451, "cityname":"Pashchim Champaran"},
{ "id":1457, "cityname":"Taliparamba"},
{ "id":1477, "cityname":"Dharmanagar"},
{ "id":1481, "cityname":"Palakollu"},
{ "id":1499, "cityname":"Bishnupur"},
{ "id":1502, "cityname":"Karwar"},
{ "id":1514, "cityname":"Ramagundam"},
{ "id":1520, "cityname":"Manjeri"},
{ "id":1525, "cityname":"Zira"},
{ "id":1532, "cityname":"Pala"},
{ "id":1541, "cityname":"Kondagaon"},
{ "id":1544, "cityname":"Pasighat"},
{ "id":1547, "cityname":"Daskroi"},
{ "id":1563, "cityname":"Kunnamkulam"},
{ "id":1579, "cityname":"Tiruchengode"},
{ "id":1591, "cityname":"Vaniyambadi"},
{ "id":1609, "cityname":"Mudhol"},
{ "id":1619, "cityname":"Nelamangala"},
{ "id":186, "cityname":"North Arcot"},
{ "id":190, "cityname":"Ramnad"},
{ "id":196, "cityname":"A&amp;N Islands"},
{ "id":307, "cityname":"Panjim"},
{ "id":321, "cityname":"Gonikoppal"},
{ "id":370, "cityname":"Vijapur"},
{ "id":393, "cityname":"Mavelikara"},
{ "id":407, "cityname":"Tura"},
{ "id":411, "cityname":"Dabra"},
{ "id":416, "cityname":"Sundergarh"},
{ "id":441, "cityname":"Miraj"},
{ "id":498, "cityname":"Dharmavaram"},
{ "id":501, "cityname":"Gudur"},
{ "id":503, "cityname":"Kavali"},
{ "id":509, "cityname":"Sattenapalle"},
{ "id":511, "cityname":"Tenali"},
{ "id":516, "cityname":"Tiruvuru"},
{ "id":539, "cityname":"Tandur"},
{ "id":547, "cityname":"Kagaznagar"},
{ "id":548, "cityname":"Belampalli"},
{ "id":596, "cityname":"Najibabad"},
{ "id":613, "cityname":"Nangal"},
{ "id":616, "cityname":"Kharsia"},
{ "id":619, "cityname":"Kayamkulam"},
{ "id":625, "cityname":"Abu"},
{ "id":628, "cityname":"Khatauli"},
{ "id":650, "cityname":"Jassur"},
{ "id":651, "cityname":"Chidambaram"},
{ "id":673, "cityname":"Suri"},
{ "id":690, "cityname":"Srikalahastri"},
{ "id":698, "cityname":"Manendragarh"},
{ "id":702, "cityname":"Madgaon"},
{ "id":703, "cityname":"Mapusa"},
{ "id":721, "cityname":"Chamrajnagar"},
{ "id":732, "cityname":"Yeole"},
{ "id":741, "cityname":"Wai"},
{ "id":742, "cityname":"Sanawad"},
{ "id":765, "cityname":"Ajnala"},
{ "id":770, "cityname":"Pinjore"},
{ "id":772, "cityname":"Metupalayam"},
{ "id":777, "cityname":"Bharanikavu"},
{ "id":797, "cityname":"Vriddhachalam"},
{ "id":801, "cityname":"Rajapalayam"},
{ "id":807, "cityname":"Asandh"},
{ "id":855, "cityname":"Tiptur"},
{ "id":869, "cityname":"Chatra"},
{ "id":872, "cityname":"Bhurkunda S.O"},
{ "id":887, "cityname":"Latehar"},
{ "id":894, "cityname":"Palamu"},
{ "id":933, "cityname":"Morigaon"},
{ "id":954, "cityname":"Bhuban"},
{ "id":958, "cityname":"Gajapathi"},
{ "id":973, "cityname":"Nayagarh"},
{ "id":980, "cityname":"Sundargarh"},
{ "id":1045, "cityname":"Kodungallur"},
{ "id":1046, "cityname":"Wadkhal"},
{ "id":1070, "cityname":"Babra"},
{ "id":1071, "cityname":"Bagasara"},
{ "id":1076, "cityname":"SavarKundla"},
{ "id":1079, "cityname":"Gadhinglaj"},
{ "id":1081, "cityname":"Kagal"},
{ "id":1083, "cityname":"Jaysingpur"},
{ "id":1088, "cityname":"Balod"},
{ "id":1104, "cityname":"Gumla"},
{ "id":1118, "cityname":"Verna"},
{ "id":1125, "cityname":"Mungeli"},
{ "id":1132, "cityname":"Baikunthpur"},
{ "id":1139, "cityname":"Rajim"},
{ "id":1147, "cityname":"Raikot"},
{ "id":114, "cityname":"Prakasam"},
{ "id":1150, "cityname":"Mandapeta"},
{ "id":1156, "cityname":"Kodinar"},
{ "id":1163, "cityname":"Palitana"},
{ "id":1171, "cityname":"Talaja"},
{ "id":1179, "cityname":"Diamond Harbour"},
{ "id":1187, "cityname":"Chotila"},
{ "id":1189, "cityname":"Dasada"},
{ "id":1200, "cityname":"Kamrup"},
{ "id":1202, "cityname":"Sonitpur"},
{ "id":120, "cityname":"West Godavari"},
{ "id":1223, "cityname":"Thoubal"}];

module.exports = carCityData;