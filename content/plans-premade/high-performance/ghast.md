---
title: "Ghast"
draft: false
category: "High Performance"
weight: 3

product:
  id: "ghast"
  name: "Ghast"
  price: "25.20"

  customFields:
    - name: "RAM"
      type: "readonly"
      value: "6 GiB"

    - name: "Storage"
      type: "readonly"
      value: "60 GiB"

    - name: "nodemodel"
      type: "readonly"
      value: "m3"

    - name: "database"
      type: "readonly"
      value: 1

    - name: "snapshots"
      type: "readonly"
      value: 10
      
    - name: "allocations"
      type: "readonly"
      value: 10
      
    - name: "servertype"
      options: "vanilla|paper|fabric|spongevanilla|forge"


  selectedPlan: "monthly-plan"

  availablePlans:
    - id: "monthly-plan"
      name: "Monthly Subscription"
      frequency: "monthly"
      interval: 1
      itemPrice: 25.20
---