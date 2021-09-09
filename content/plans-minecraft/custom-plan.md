---
title: "Custom Plan"
draft: false

product:
  id: "general-hut"
  name: "Custom Plan"
  price: "10.00"

  customFields:
    - name: "RAM"
      type: "dropdown"
      value: "2GB"
      options: "1GB[+1.00]|2GB[+2.00]|3GB[+3.00]|4GB[+4.00]|5GB[+5.00]|6GB[+6.00]|7GB[+7.00]|8GB[+8.00]"

    - name: "AMD CPU Cores"
      type: "dropdown"
      value: "0"
      options: "0|1 CPU[+1.00]|2 CPUs[+2.00]|3 CPUs[+3.00]|4 CPUs[+4.00]|5 CPUs[+5.00]|6 CPUs[+6.00]|7 CPUs[+7.00]|8 CPUs[+8.00]"

    - name: "ARM CPU Cores"
      type: "dropdown"
      value: "0"
      options: "0|1 CPU[+1.00]|2 CPUs[+2.00]|3 CPUs[+3.00]|4 CPUs[+4.00]|5 CPUs[+5.00]|6 CPUs[+6.00]|7 CPUs[+7.00]|8 CPUs[+8.00]"

    - name: "Extra: Minecraft Server"
      type: "dropdown"
      value: "0"
      options: "0|1[+1.00]|4[+4.00]|8[+8.00]|12[+12.00]|16[+16.00]|18[+18.00]|22 CPUs[+22.00]"

    - name: "Extra: VPS Server"
      type: "dropdown"
      value: "0"
      options: 0|"1[+1.00]|4[+4.00]|8[+8.00]|12[+12.00]|16[+16.00]|18[+18.00]|22 CPUs[+22.00]"

    - name: "Extra: Web Hosting"
      type: "dropdown"
      value: "0"
      options: 0|"1[+1.00]|4[+4.00]|8[+8.00]|12[+12.00]|16[+16.00]|18[+18.00]|22 CPUs[+22.00]"

    - name: "Extra: Database Server"
      type: "dropdown"
      value: "0"
      options: 0|"1[+1.00]|4[+4.00]|8[+8.00]|12[+12.00]|16[+16.00]|18[+18.00]|22 CPUs[+22.00]"

    - name: "Extra: Proxy Server"
      type: "dropdown"
      value: "0"
      options: "0|1[+1.00]|4[+4.00]|8[+8.00]|12[+12.00]|16[+16.00]|18[+18.00]|22 CPUs[+22.00]"

  selectedPlan: "monthly-plan"

  availablePlans:
    - id: "monthly-plan"
      name: "Monthly Subscription"
      frequency: "monthly"
      interval: 1
      itemPrice: 10.00
---
