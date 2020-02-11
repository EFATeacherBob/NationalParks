/************************************
 *  Bob Madison
 *  Eleven Fifty Academy
 *  Gold Badge API Project
 ***********************************/

/*******************************************************************
 *  I wanted images in the API. Unfortunately, there were none in the
 *  JSON file. So, I searched and copied the links for one image of
 *  each state park. In the array of object (parkPictures) there are
 *  two keys
 * 
 *    1. pkId --> the 4-character park identification
 *    2. pict --> a link to the picture of the park desinated 
 *                by pkId
 ******************************************************************/

let parkPictures = [
    {
        pkId: "bela", // Alaska 1
        pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtzySEQxJmtq7RSIl2s0XqjI1IWUS2o9JXwDtVNb8-W2JF1jDgxw&s"
    },
    {
        pkId: "dena", // Alaska 2
        pict: "https://www.nps.gov/common/uploads/grid_builder/dena/crop16_9/EC9EA7D1-1DD8-B71B-0B1C5E81368CC585.jpg?width=465&quality=90&mode=crop"
    },
    {
        pkId: "gaar", // Alaska 3
        pict: "https://www.nps.gov/common/uploads/grid_builder/gaar/crop16_9/FE6863E0-1DD8-B71B-0B4E9A34F681735C.jpg?width=465&quality=90&mode=crop"
    },
    {
        pkId: "glba", // Alaska 4
        pict: "https://www.nps.gov/common/uploads/grid_builder/glba/crop16_9/3AD5B405-1DD8-B71B-0BF8C764F38F60F9.jpg?width=307&quality=90&mode=crop"
    },
    {
        pkId: "katm", // Alaska 5
        pict: "https://www.nps.gov/common/uploads/grid_builder/katm/crop16_9/9D4F068D-1DD8-B71B-0B48A94015D3963D.jpg?width=465&quality=90&mode=crop"
    },
    {
        pkId: "kova", // Alaska 6
        pict: "https://www.nps.gov/kova/planyourvisit/images/IMG_5878_1.jpg?maxwidth=650&autorotate=false"
    },
    {
        pkId: "lacl", // Alaska 7
        pict: "https://www.nps.gov/common/uploads/grid_builder/lacl/crop16_9/E6C11F74-9778-7B63-7561288F717F32C3.jpg?width=465&quality=90&mode=crop"
    },
    {
        pkId: "wrst", // Alaska 8
        pict: "https://www.nps.gov/common/uploads/grid_builder/wrst/crop16_9/80412E2E-0165-9322-AEB6B4A19F643D8D.jpg?width=465&quality=90&mode=crop"
    },
    {
        pkId: "badl", // South Dakota
        pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTXQkd9JRRViv48wVZF-97Ndk3KBCUVEzF0jPp91IpRmKN9JSr7"
    
    },
    {
        pkId: "acad", // Maine
        pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS8OJAqTu-p_PRWw44pmPM45qJNqfstrF6E_sATX--0bqQ_jIjd"
    },
    {
        pkId: "meve", // Colorado 1
        pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7kaWKKrjSw9uMofBJMOflzYom5CPql3UnzZv9AeWA_JdRLzbj"
    },
    {
        pkId: "blca", // Colorado 2
        pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRgfZn1cOHesQmrFcccXxjtBoED9dPCQmIlrJjGwAfj-H39utGi"
    },
    {
        pkId: "grsa", // Colorado 3
        pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSincbLj7kYs918CRJ-74qxUuEW4q7gMGpSHY9bUfCttd0Zwh2L"
    },
    {
        pkId: "romo", // Colorado 4
        pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSdsAkyiLtSDjR7NLkYuxCrmllXcVaDqiFHdnP7SLWm8_ArPH9A"
    },
    {
        pkId: "hosp", // Arkansas
        pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUDMNrGy152-SOegF2FyA3GnZAcMqFBFk5G8aSBjzvdf0MfWT0"
    },
    {
        pkId: "grca", // Arizona 1
        pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqpdIkMBJE3gaRqy0efB_tXVjnDP17sJp0KWKFcRNxcJ7d8fOb"
    },
    {
        pkId: "pefo", // Arizona 2 
        pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRwQ2HHxi68g8OASTZVxciThA0VwcnUD76RcUsFm8TOhRHuCVU0"
    },
    {
        pkId: "sagu", // Arizona 3
        pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxHttG5ytHtDfOCa1VoYUzrra3izbjv9GJTigW2N2l4xYfvsPf"
    },
    {
        pkId: "chis", // California 1
        pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQmwQkRLx3J_3GIMtniY_TEpKN4SxJuLbFx_VcyNyulcQlXWmWW"
    },
    {
        pkId: "deva", // California 2, Neveda
        pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSMmNL4CJ_B1zDETNi2_2xxcb0xJM5GWZ-kMluD_QzZqilG02vd"
    },
    {
        pkId: "jotr", // California 3
        pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6Y5T1SnFwATJNZr111ZdOlc1kbqGm_rLOG7J1DDhsTBrD17G8"
    },
    {
        pkId: "lavo", // California 4
        pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKuwanM7vt68mS-tRRNcK7Zx1Ecu-IB9NEIrgQX7X8EgX8DQWU"
    },
    {
        pkId: "pinn", // California 5
        pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRoqh6k9QMuWkE7mlWL_d_IsGsn5aRR29Pt1UCTHrAQSY_JAtAQ"
    },
    {
        pkId: "redw", // California 6
        pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgjOsNshGFDCF9FlWuzjZvz2swEcQ7-di2BTdkW6z3We6dfhz1"
    },
    {
        pkId: "seki", // California 7
        pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQr5VoD6_TU59bFjBd6fSAdEPz2ZzKQQnBiU4xmOk4BDdPx-wjU"
    },
    {
        pkId: "yose", // California 8
        pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQIdM_OxxfiJc7xUU_e8FFQSbcl58XRHHSrqwuFXDKvfsyrYhHv"
    },
    {
        pkId: "bisc", // Florida 1
        pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ83UU0m8rkAso5WDCpaiJqZH7uKvE8dOhFjNy4lyIGD2HmVLeP"
    },
    {
        pkId: "drto", // Florida 2
        pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnUIcgCQwQk6qsP3lufOFR2G-4AGwZgdXIxIEtVLvkQYwSwZgP"
    },
    {
        pkId: "ever", // Florida 3
        pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQskVhlghJ00VWhzmAyyKRNNr3XXcGY6FlKd4NxRfuUOigks8QY"
    },
    {
        pkId: "hale", // Hawaii 1
        pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsjKIYfEMKW9XjvIq-jHVVBd6Qqt0wLRDu8p5j6t0lTPZFlgjS"
    },
    {
        pkId: "havo", // Hawaii 2
        pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRWYdPNuhd7_nPl5LGfUp1E19lvCBReGVLc0a4Jvn5Y76I9wWGM"
    },
    {
        pkId: "yell", // Idaho, Montana, Wyoming
        pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUFU1LhaQL54U1YkbaSvcv_jHNZLmIy5adAOTNVMgaAbJ8t_kU"
    },
    {
        pkId: "indu", // Indiana
        pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQCk-zDuUiCTZwjsGCLAMq4ulb10wakjOAtgDFokUMHyWCbRxvx"
    },
    {
        pkId: "maca", // Kentucky
        pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRFSglAQuIx852AJWkP8g04-YgfC-CLeePG1g6OXUBRVn3hA0bk"
    },
    {
        pkId: "acad", // Maine
        pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTFkwJO7VBYE0AMH7e4QPvLNVTNl6PbTbrfwO_UDA7MqOESd4h6"
    },
    {
        pkId: "asis", // Maryland, Virginia
        pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhL5c0aQknubC9vN9ZbNN2_NPwnHIcbL_AInmPKFUjPe0ZfuWK"
    },
    {
        pkId: "isro", // Michigan
        pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRlzw7omFoKx8aQWVApfFj3lYSsn41g8UprTsznzk2KR8-Zs8RV"
    },
    {
        pkId: "voya", // Minnesota
        pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRtSx2VQwlm9AEQD1igKzrR9Pm0FBs_5tx5QUNV4FkpkJrWaBZt"
    },
    {
        pkId: "glac", // Montana
        pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbPQPZ_JxlBgX_-EWLqnrvhdFZGjm1ljgFaUSq1i5cFyx9zWQS"
    },
    {
        pkId: "grsm", // North Carolina, Tennessee
        pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS2Pzx629ynsLsGxLDWc8qsCQiEigih0JlKvFSu6fzQNi-bQ2BE"
    },
    {
        pkId: "thro", // North Dakota
        pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7F90nlHZg8Ba1ik4LytRu3Q4DeoQGUcE09qrmWktrQigvbr4w"
    },
    {
        pkId: "cave", // New Mexico
        pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnoqIE20pfkqV0BaGBmH17uaeLL3pmjsFy_8AFvZAZs254_Toc"
    },
    {
        pkId: "grba", // Nevada
        pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQnHjCcD5H6fN36vVSlEbaS9NBAkHIgevqsG00qqDpMBv1N9h5V"
    },
    {
        pkId: "cuva", // Ohio
        pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRwqtMdx_6y0XYbo_A-UNZJV3z_GUuxbCsG2GM2xvfOgwb35KLw"
    },
    {
        pkId: "crla", // Oregon
        pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSE1vAC6C0D367u7fJkE2y_l9wYXOs3KGKux8g8A3jap5089CEx"
    },
    {
        pkId: "cong", // South Carolina
        pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSmDZpvvdsIb9pOhHdSkQolXK2wYMeQJHArSD0QiXj9dwP-Fb-e"
    },
    {
        pkId: "badl", // South Dakota
        pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZVSfhkaK1GoBKeAYx-2goTtirfQW5iyMs8TmMXWXoP8YbIUmj"
    },
    {
        pkId: "wica", // South Dakota
        pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ70r3geOdpGgdCPm-9hoBgzrTU0ZC6DTS790LCccfC8WBE85xh"
    },
    {
        pkId: "amis", // Texas
        pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT5ohqiZO6AE_BXGTWie1zRoMz0G79f6V2rMG1r4Yq0xhGxAyOS"
    },
    {
        pkId: "bibe", // Texas
        pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBZrCbaykpiTfhONbkDzU8ksBCsZPdefZ8EaTtk0msvwW-G7E2"
    },
    {
        pkId: "gumo", // Texas
        pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS52g5YzOlS45GeF1zggnQ4DZ5J7jNw12xj-T2ffcD1WPf8JL2v"
    },
    {
        pkId: "arch", // Utah 1
        pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTSfyJV0utEFrrypuIoRTbVo5jNx2gByKrE6AIcdubENsD73xj6"
    },
    {
        pkId: "cany", // Utah 2
        pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQmbLeZ8xx_YF4sKTe_tLBd5Ksm40uJgGKVKmGeuOt7PK1GxW6C"
    },
    {
        pkId: "care", // Utah 3
        pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFZtuDJUSRIZ1I6DSY3Abh0xnXdiufSIMjif9-oAea6fcZpT0x"
    },
    {
        pkId: "zion", // Utah 4
        pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDBBQjyQ0qbkGmjcN3X39ss9wY2V4DGPHT4myjvB1Vz19EKO0q"
    },
    {
        pkId: "viis", // Virgin Islands
        pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRwaSbxUj9DfSAd1hdCvMDUq-gVZT5z_qfXHkrCndiaAfqOA6yL"
    },
    {
        pkId: "shen", // Virginia
        pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWsuR09aT_el0zmi1IhoYgc0z4iw01c9MyG-6OnJqY9sD1Nh4v"
    },
    {
        pkId: "kefj", // Washington 1
        pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcThZWhTWbxbnFM9g03k9Gv4OT5_GhFGbXXfcGCZOMHVQYsFAVh5"
    },
    {
        pkId: "mora", // Washington 2
        pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRA7e3oUHjLinu4vsM91EujdkEWCVGTHGb6K2s_9N0nsMreCYKS"
    },
    {
        pkId: "noca", // Washington 3
        pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQxntwkModZN7bQ_cMAMX7T22eSgtNM9bZSxikDyWYyepG1ja-H"
    },
    {
        pkId: "olym", // Washington 4
        pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRt5y7IXBYacW9QbO79421YdczAbMIPCMKoJHlHPnIgm0P9mtu8"
    },
    {
        pkId: "grte", // Wyoming
        pict: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRdWfdWmYp0UXpOEIkpTXz1qh_dlwQcbmz4KTqE2YnOzDeH6aoA"
    }
]

// The following array is used to display the button group of the selected state
// and to hide all of the non-selected state groups. See lines 52 - 59 in script.js.

let stateCodes =["AK","AR","AZ","CA","CO","FL","HI","ID","IN","KY","ME","MD","MI","MN","MT",
                 "NC","ND","NM","NV","OH","OR","SC","SD","TN","TX","UT","VA","VI","WA","WY"]
